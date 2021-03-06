$originalChart = null;
$currentChart = null;
var opts = {	// opciones del organigrama
			chartElement : '#chartContainer', //your tree container
			handleClick: false,
			depth: 2,
			interactive: false,
			};

$((function (win) {
    // ###### Espacio de nombres ######
    var app = null;
    if (!win.organizationChart)
        app = win.organizationChart = {};
    else
        app = win.organizationChart;
		
	app.OrganizationChartManagement = function (tree) {
		var self = this;
		self.tree = tree;
		
		self.init_chart = function (orgList){			
			$("#chartContainer").html(""); //clean your container			
			$("#chartContainer").html(orgList);
			
			$originalChart = $("div#chartContainer ul#org").clone();
			$currentChart = $originalChart.clone();
			$currentChart.jOrgChart(opts); //creates the jOrgChart

			$("div.container div.node").click(function () {
				var $this = $(this);
				self.handleClick($this);
			});
		}
		
		self.handleClick = function (nodeDiv){
			$nodeDiv = $(nodeDiv);
			var id = $nodeDiv.find("span").attr("data-id");
			var type = $nodeDiv.find("span").attr("data-type");
			self.tree.seekAndSelectNode(id, type);
			
			if (id) {
				var target = $currentChart.find('li span[data-id="' + id + '"]');

				if (target) {
					$currentChart = $("<ul>").append(target.parent("li")).clone();

					$("div.container").fadeOut(200, function () {
						$("div.container").html("");
						$currentChart.jOrgChart(opts);
						
						$("div.container").fadeIn(200);
						$("div.container div.node:not(:first)").click(function () {
							var $this = $(this);
							self.handleClick($this);
						});
					})
				}
			}
		}
	}
})(window));



(function ($) {
    $.fn.jOrgChart = function (options) {
        var opts = $.extend({}, $.fn.jOrgChart.defaults, options);
        var $appendTo = $(opts.chartElement);

        // build the tree
        $this = $(this);
        var $container = $("<div class='" + opts.chartClass + "'/>");
        if ($this.is("ul")) {
            buildNode($this.find("li:first"), $container, 0, opts);
        } else if ($this.is("li")) {
            buildNode($this, $container, 0, opts);
        }
        $appendTo.append($container);
    };

    // Option defaults
    $.fn.jOrgChart.defaults = {
        chartElement: 'body',
        depth: -1,
        chartClass: "jOrgChart",
        dragAndDrop: false,
        interactive: true
    };

    var nodeCount = 0;
    // Method that recursively builds the tree
    function buildNode($node, $appendTo, level, opts) {
        var $table = $("<table cellpadding='0' cellspacing='0' border='0'/>");
        var $tbody = $("<tbody/>");

        // Construct the node container(s)
        var $nodeRow = $("<tr/>").addClass("node-cells");
        var $nodeCell = $("<td/>").addClass("node-cell").attr("colspan", 2);
        var $childNodes = $node.children("ul:first").children("li");
        var $nodeDiv;

        if ($childNodes.length > 1) {
            $nodeCell.attr("colspan", $childNodes.length * 2);
        }
        // Draw the node
        // Get the contents - any markup except li and ul allowed
        var $nodeContent = $node.clone()
            .children("ul,li")
            .remove()
            .end()
            .html();

        //Increments the node count which is used to link the source list and the org chart
        nodeCount++;
        $node.data("tree-node", nodeCount);
        $nodeDiv = $("<div>").addClass("node")
            .data("tree-node", nodeCount)
            .append($nodeContent);

        // Expand and contract nodes
        if (opts.interactive) {
            if ($childNodes.length > 0) {
                $nodeDiv.click(function () {
                    var $this = $(this);
                    var $tr = $this.closest("tr");

                    if ($tr.hasClass('contracted')) {
                        $this.css('cursor', 'hand');
                        $tr.removeClass('contracted').addClass('expanded');
                        $tr.nextAll("tr").css('visibility', '');

                        // Update the <li> appropriately so that if the tree redraws collapsed/non-collapsed nodes
                        // maintain their appearance
                        $node.removeClass('collapsed');
                    } else {
                        $this.css('cursor', 'hand');
                        $tr.removeClass('expanded').addClass('contracted');
                        $tr.nextAll("tr").css('visibility', 'hidden');

                        $node.addClass('collapsed');
                    }
                });
            }
        }

        $nodeCell.append($nodeDiv);
        $nodeRow.append($nodeCell);
        $tbody.append($nodeRow);

        if ($childNodes.length > 0) {
            // if it can be expanded then change the cursor
            $nodeDiv.css('cursor', 'hand');

            // recurse until leaves found (-1) or to the level specified
            if (opts.depth == -1 || (level + 1 < opts.depth)) {
                var $downLineRow = $("<tr/>");
                var $downLineCell = $("<td/>").attr("colspan", $childNodes.length * 2);
                $downLineRow.append($downLineCell);

                // draw the connecting line from the parent node to the horizontal line 
                $downLine = $("<div></div>").addClass("chartline down");
                $downLineCell.append($downLine);
                $tbody.append($downLineRow);

                // Draw the horizontal lines
                var $linesRow = $("<tr/>");
                $childNodes.each(function () {
                    var $left = $("<td>&nbsp;</td>").addClass("chartline left top");
                    var $right = $("<td>&nbsp;</td>").addClass("chartline right top");
                    $linesRow.append($left).append($right);
                });

                // horizontal line shouldn't extend beyond the first and last child branches
                $linesRow.find("td:first")
                    .removeClass("top")
                    .end()
                    .find("td:last")
                    .removeClass("top");

                $tbody.append($linesRow);
                var $childNodesRow = $("<tr/>");
                $childNodes.each(function () {
                    var $td = $("<td class='node-container'/>");
                    $td.attr("colspan", 2);
                    // recurse through children lists and items
                    buildNode($(this), $td, level + 1, opts);
                    $childNodesRow.append($td);
                });

            }
            $tbody.append($childNodesRow);
        }

        // any classes on the LI element get copied to the relevant node in the tree
        // apart from the special 'collapsed' class, which collapses the sub-tree at this point
        if (opts.interactive) {
            if ($node.attr('class') != undefined) {
                var classList = $node.attr('class').split(/\s+/);
                $.each(classList, function (index, item) {
                    if (item == 'collapsed') {
                        console.log($node);
                        $nodeRow.nextAll('tr').css('visibility', 'hidden');
                        $nodeRow.removeClass('expanded');
                        $nodeRow.addClass('contracted');
                        $nodeDiv.css('cursor', 'hand');
                    } else {
                        $nodeDiv.addClass(item);
                    }
                });
            }
        }

        $table.append($tbody);
        $appendTo.append($table);

        /* Prevent trees collapsing if a link inside a node is clicked */
        $nodeDiv.children('a').click(function (e) {
            console.log(e);
            e.stopPropagation();
        });
    };

})(jQuery);