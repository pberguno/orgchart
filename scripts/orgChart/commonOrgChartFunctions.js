var ENTER_KEY = 13;

/*
* Devuelve el propio objeto, cuyo Id se corresponde con val, y todos sus descendientes.
*/
function getHierarchicalObjects(obj, key, val, nodeType) {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getHierarchicalObjects(obj[i], key, val, nodeType));
		} else if (i == key && obj[key] == val && obj['NodeType'] == nodeType) {
			objects.push(obj);
		}
	}
	return objects;
}

/*
* Transforma la información de empleado en código HTML.
*/
function getEmployeePersonalInformation(employeeNode) {
	return '<div id="wrapperEmployee"> ' +
		'<div class="selfEmployeeImage"> ' +
		'</div> ' +
		'<hr class="selfEmployeeSeparator"/>' +
		'<div class="selfEmployee"> ' +
		'<span class="selfEmployeeName">' + employeeNode.name + '</span><br /> ' +
		'<span class="selfEmployeePositionType">' + employeeNode.PositionTypeName + '</span>' +
		'<ul> ' +
		'<li class="ad">Direcci&oacute;n</li> ' +
		'<li class="mail">empleado@conti.com</li> ' +
		'<li class="tel">+11 444 555 22 33</li> ' +
		'<li class="web">www.blog_o_paginaPersonal.com</li> ' +
		'</ul> ' +
		'</div> ' +
		'<div class="selfEmployee"> ' +
		'<span class="cvextract">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
		'<br/><br/>' +
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
		'velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>' +
		'</div> ' +
		'<!-- End Personal Information --> ' +
		'</div> ';
}

/*
* Transforma un nodo de compañía en formato Json a código HTML.
* La variable lonelyEmployee nos permite saber si el departamento tiene sólo un empleado.
*/
function transformNodeToHtml(data, isSub, lonelyEmployee) {
	var html = "";

	if (data.length == 1 && data[0].NodeType == "Employee" && !lonelyEmployee)
		return getEmployeePersonalInformation(data[0]);

	if (isSub)
		html += "<ul>";
	else
		html += "<ul id='org' style='display: none;'>"

	for (i in data) {
		lonelyEmployee = false;
		html += '<li>';
		if (typeof (data[i].children) === 'object') {
			html += '<br/>';
			if (isSub && data[i].children.length) {
				html += '<div class="overlayImg"><img src="img/orgChart/departmentPlus.png"></div>';
				html += '<span class="companyNode" data-id="' + data[i].Id + '" data-type="' + data[i].NodeType + '">' + data[i].name + '</span>';
				if (data[i].children.length == 1)
					lonelyEmployee = true;
			} else {
				if (data[i].NodeType == "Employee") {
					html += '<div class="overlayImg"><img src="img/orgChart/employeeIcon.png"></div>';
					html += '<span class="positionType" data-id="' + data[i].Id + '" data-type="' + data[i].NodeType + '">';
					html += data[i].PositionTypeName + '</span><br>';
					html += '<span class="employee">' + data[i].name + '</span>';

				} else {
					html += '<span class="companyNode" data-id="' + data[i].Id + '"data-type="' + data[i].NodeType + '">' + data[i].name + '</span>';
					if (data[i].children.length == 1)
						lonelyEmployee = true;
				}
			}
			html += transformNodeToHtml(data[i].children, true, lonelyEmployee); // Submenu encontrado
		} else {
			html += '<span data-id="' + data[i].Id + '"  data-type="' + data[i].NodeType + '">' + data[i].name + '</span>'; // No submenu
		}
		html += '</li>';
	}
	html += '</ul>';
	html = html.replace("<ul></ul>", "");
	return html;
}

/*
* Manipula la información html para los casos de Manager y Assistant.
* 	- Los manager se presentan en la misma caja, debajo del nombre del departamento.
* 	- Los asistentes se presentan al lado derecho de los manager.
*/
function customizeHtml(html) {
	var htmlObject = $($.parseHTML(html));
	// Manager	
	var managerEmployees = htmlObject.find("span.positionType:contains('Manager')");
	$(managerEmployees).each(function (i) {
		var managerCompanyNode = $(this).parent().parent().prev('.companyNode');
		var managerCompanyNodeText = managerCompanyNode.html();

		var manager = $(this).parent();
		var managerId = manager.find('span:first').attr('data-id');
		var managerText = manager.find('span:last').text();

		managerCompanyNode.html(
			managerCompanyNodeText + "<br />" + 
			"<div class='manager'>" + 
			"<span data-type='Employee' data-id='" + managerId + "'>" + managerText + "</span>" + 
			"</div>");
		manager.remove();
	});

	// Asistentes
	var assistantEmployees = htmlObject.find("span.positionType:contains('Assistant')");
	$(assistantEmployees).each(function (i) {
		var assistantCompanyNode = $(this).parent().parent().prev('.companyNode');
		var assistantCompanyNodeText = assistantCompanyNode.html();

		var assistant = $(this).parent();
		var assistantId = assistant.find('span:first').attr('data-id');
		var assistantText = assistant.find('span:last').text();

		assistantCompanyNode.html(
			assistantCompanyNodeText + "<br />" +
			"<div class='assistant'><br/>" +
			"<span class='assistantLiteral'>Assistant</span><br/>" +
			"<span data-type='Employee' data-id='" + assistantId + "'class='assistantEmployee'>" + assistantText + "</span>" +
			"</div>");
		assistant.remove();
	});

	return htmlObject[0].outerHTML;
}

/*
* Pinta una excepción en pantalla.
*/
function PaintException(message) {
	$('#errorSection').show();
	$('#errorTitle').append(message + '<br/>');
}

/*
* Tras pintar el organigrama se requieren acciones sobre sus elementos. Esto es debido a que estilos e imágenes se aplican en un
* principio a todo el organigrama, pero después en la navegación por los nodos puede ser necesario descartarlos.
* Imágenes que no aplican. 
* - Elimina los asistentes que pudieran mostrarse en segundo nivel del organigrama. Sólo deben aparecer los del primer nivel.
* - Elimina los iconos que pudieran mostrarse en el nodo de primer nivel.
* Eliminamos estilos css que no procedan.
*/
function orgChartPostProcessing() {
	$('.jOrgChart').find('table tbody tr td.node-container div.assistant').remove();
	$('.jOrgChart').find('table tr:first td.node-cell .overlayImg').remove(); // fuera iconos de + o ficha de empleado, en primer nivel

	// sobreescribimos el borde del círculo de los puestos de trabajo.
	$('span.positionType').parent().css('box-shadow', '0 0 2px 1px #ffae00');

	var lonelyEmployee = $('.jOrgChart').find('table tr').length == 1;
	if (lonelyEmployee) {
		var lonelyManager = $('.jOrgChart').find('table tr:first td.node-cell .manager');
		if (lonelyManager) {
			lonelyManager.removeClass('manager');
			lonelyManager.addClass('lonelyManager');
		}
	}
}

/*
* Permite moverse hasta el nodo activo en el árbol de la organización.
*/
function goToActiveNodeByScroll() {
	var relativeDiff = $(".dynatree-active").offset().top - $('ul.dynatree-container li:first').offset().top;	
	$('ul.dynatree-container').animate({
		scrollTop: relativeDiff
	}, 'slow');
}

/* 
* Permite definir el manejador KnockOut executeOnEnter sobre los controles en HTML.
*/
ko.bindingHandlers.executeOnEnter = {
	init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
		var allBindings = allBindingsAccessor();
		$(element).keypress(function (event) {
			var keyCode = (event.which ? event.which : event.keyCode);
			if (keyCode === ENTER_KEY) {
				allBindings.executeOnEnter.call(viewModel);
				return false;
			}
			return true;
		});
	}
};

$.extend({
	getUrlVars: function(){
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	{
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
	},
	getUrlVar: function(name){
	return $.getUrlVars()[name];
	}
});