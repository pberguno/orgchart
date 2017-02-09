var companyNodes = [],
	employees = [],
	positionTypes = [];

var globalVar = {
    organizationData :
	[{"Id":"1","name":"GENERAL MARKET","NodeType":"RootNode","ParentNodeId":null,"children":[{"Id":"1","name":"Jon Ander García","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"1","PositionTypeId":"1","PositionTypeName":"Manager"},{"Id":"2","name":"Elena Ramirez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"1","PositionTypeId":"2","PositionTypeName":"Assistant"},{"Id":"2","name":"Continental Tires","NodeType":"CompanyNodeType","ParentNodeId":"1","children":[{"Id":"4","name":"Passenger Sales","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"4","name":"Ismael Rubio ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"4","PositionTypeId":"3","PositionTypeName":"Manager"},{"Id":"5","name":"Ángel Álvarez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"4","PositionTypeId":"4","PositionTypeName":"Assistant"},{"Id":"21","name":"Retailer","NodeType":"CompanyNodeType","ParentNodeId":"4","children":[{"Id":"22","name":"Zona Norte","NodeType":"CompanyNodeType","ParentNodeId":"21","children":[{"Id":"6","name":"L.Miguel Cabanas ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"22","PositionTypeId":"5","PositionTypeName":"Manager"},{"Id":"7","name":"J.A Penas ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"22","PositionTypeId":"6","PositionTypeName":"Sales Force"},{"Id":"8","name":"Arkaitz Arregui ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"22","PositionTypeId":"6","PositionTypeName":"Sales Force"},{"Id":"9","name":"David Bouzas ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"22","PositionTypeId":"6","PositionTypeName":"Sales Force"},{"Id":"10","name":"Andrés García ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"22","PositionTypeId":"6","PositionTypeName":"Sales Force"}],"Selected":false},{"Id":"23","name":"Zona Sur","NodeType":"CompanyNodeType","ParentNodeId":"21","children":[{"Id":"11","name":"Jesús Moreno ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"23","PositionTypeId":"7","PositionTypeName":"Manager"},{"Id":"12","name":"Antonio G. Bodi","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"23","PositionTypeId":"8","PositionTypeName":"Sales Force"},{"Id":"13","name":"Jesús Abarca ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"23","PositionTypeId":"8","PositionTypeName":"Sales Force"},{"Id":"14","name":"Antonio Martín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"23","PositionTypeId":"8","PositionTypeName":"Sales Force"},{"Id":"15","name":"Marco Machado ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"23","PositionTypeId":"8","PositionTypeName":"Sales Force"}],"Selected":false},{"Id":"24","name":"Zona Este","NodeType":"CompanyNodeType","ParentNodeId":"21","children":[{"Id":"16","name":"Javier Leal ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"24","PositionTypeId":"9","PositionTypeName":"Manager"},{"Id":"17","name":"Eduardo Lillo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"24","PositionTypeId":"10","PositionTypeName":"Sales Force"},{"Id":"18","name":"Oriol Domenech ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"24","PositionTypeId":"10","PositionTypeName":"Sales Force"},{"Id":"19","name":"Enrique Nuñez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"24","PositionTypeId":"10","PositionTypeName":"Sales Force"},{"Id":"20","name":"Paco Brocal ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"24","PositionTypeId":"10","PositionTypeName":"Sales Force"}],"Selected":false},{"Id":"25","name":"Zona Centro","NodeType":"CompanyNodeType","ParentNodeId":"21","children":[{"Id":"21","name":"Ángel Sánchez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"25","PositionTypeId":"11","PositionTypeName":"Manager"},{"Id":"22","name":"Manuel López ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"25","PositionTypeId":"12","PositionTypeName":"Sales Force"},{"Id":"23","name":"J. C. Crespo","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"25","PositionTypeId":"12","PositionTypeName":"Sales Force"},{"Id":"24","name":"Carlos Falcó ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"25","PositionTypeId":"12","PositionTypeName":"Sales Force"}],"Selected":false}],"Selected":false},{"Id":"26","name":"NNCC - CD","NodeType":"CompanyNodeType","ParentNodeId":"4","children":[{"Id":"25","name":"Fernando Jiménez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"26","PositionTypeId":"14","PositionTypeName":"Manager"},{"Id":"26","name":"Víctor Carratalá ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"26","PositionTypeId":"15","PositionTypeName":"K B Developer"},{"Id":"27","name":"Catherine Cleary ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"26","PositionTypeId":"16","PositionTypeName":"TTM Consultant"},{"Id":"31","name":"Sales Force NNCC - CD","NodeType":"CompanyNodeType","ParentNodeId":"26","children":[{"Id":"28","name":"Juan Carlos Acción ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"},{"Id":"29","name":"David Arribas ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"},{"Id":"30","name":"Francesc Cañellas ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"},{"Id":"31","name":"Daniel León ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"},{"Id":"32","name":"David Moliner ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"},{"Id":"33","name":"Alberto Lesmes ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"},{"Id":"34","name":"Pedro Pedrón ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"31","PositionTypeId":"17","PositionTypeName":"Sales Force"}],"Selected":false}],"Selected":false},{"Id":"27","name":"KAM","NodeType":"CompanyNodeType","ParentNodeId":"4","children":[{"Id":"35","name":"Victor Monreal ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"27","PositionTypeId":"18","PositionTypeName":"Manager"},{"Id":"36","name":"Óscar Martín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"27","PositionTypeId":"19","PositionTypeName":"Fleet Service"},{"Id":"37","name":"Alfonso Baeza ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"27","PositionTypeId":"20","PositionTypeName":"KAM"},{"Id":"38","name":"Robin Baer ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"27","PositionTypeId":"20","PositionTypeName":"KAM"}],"Selected":false},{"Id":"28","name":"Moto","NodeType":"CompanyNodeType","ParentNodeId":"4","children":[{"Id":"39","name":"Javier Santos ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"28","PositionTypeId":"21","PositionTypeName":"Manager"},{"Id":"40","name":"Carlos Ortigosa ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"28","PositionTypeId":"22","PositionTypeName":"Sales Force"}],"Selected":false}],"Selected":false},{"Id":"5","name":"Truck Sales","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"41","name":"Daniel Camacho ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"5","PositionTypeId":"23","PositionTypeName":"Manager"},{"Id":"58","name":"Miguel Ángel Sánchez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"5","PositionTypeId":"32","PositionTypeName":"Fleet KAM"},{"Id":"59","name":"Jose Trujillo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"5","PositionTypeId":"33","PositionTypeName":"Network"},{"Id":"29","name":"Marketing Truck Sales","NodeType":"CompanyNodeType","ParentNodeId":"5","children":[{"Id":"42","name":"Juan Marín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"29","PositionTypeId":"24","PositionTypeName":"Manager"},{"Id":"43","name":"María Gálvez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"29","PositionTypeId":"25","PositionTypeName":"Pricing"}],"Selected":false},{"Id":"30","name":"CES - Office","NodeType":"CompanyNodeType","ParentNodeId":"5","children":[{"Id":"44","name":"Jose Luis Martín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"30","PositionTypeId":"26","PositionTypeName":"Manager"},{"Id":"45","name":"Laura Estepa ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"30","PositionTypeId":"27","PositionTypeName":"Office Ad"},{"Id":"46","name":"Juan José García ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"30","PositionTypeId":"27","PositionTypeName":"Office Ad"},{"Id":"47","name":"Ramón Ramón ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"30","PositionTypeId":"28","PositionTypeName":"Casing Inspe"}],"Selected":false},{"Id":"32","name":"Sales Force Truck Sales","NodeType":"CompanyNodeType","ParentNodeId":"5","children":[{"Id":"48","name":"Raúl Aguilar ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"49","name":"Jose Ignacio Vilaplana ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"50","name":"J.A. Tapia ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"51","name":"Fco. Mancebo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"52","name":"Sergio Molero ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"53","name":"Miguel Cortés ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"54","name":"Sergio Martínez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"55","name":"Eduardo Galeto ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"},{"Id":"157","name":"Álvaro Rodriguez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"32","PositionTypeId":"29","PositionTypeName":"Sales Force"}],"Selected":false},{"Id":"33","name":"Nat Fleet","NodeType":"CompanyNodeType","ParentNodeId":"5","children":[{"Id":"56","name":"Alejandro Moyano ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"33","PositionTypeId":"30","PositionTypeName":"Manager"},{"Id":"57","name":"Miguel Ruíz ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"33","PositionTypeId":"31","PositionTypeName":"Sales Force"}],"Selected":false}],"Selected":false},{"Id":"6","name":"Com Specialty Tires","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"60","name":"David Alonso ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"6","PositionTypeId":"34","PositionTypeName":"Manager"},{"Id":"61","name":"Jorge Fernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"6","PositionTypeId":"35","PositionTypeName":"Marketing"},{"Id":"62","name":"Nuria Morales ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"6","PositionTypeId":"36","PositionTypeName":"Sales Administration"},{"Id":"36","name":"Sales Force Com Specialty Tires","NodeType":"CompanyNodeType","ParentNodeId":"6","children":[{"Id":"63","name":"Víctor Álvarez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"36","PositionTypeId":"37","PositionTypeName":"Sales Force"},{"Id":"64","name":"José C. Carrasco ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"36","PositionTypeId":"37","PositionTypeName":"Sales Force"},{"Id":"65","name":"Alfonso García ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"36","PositionTypeId":"37","PositionTypeName":"Sales Force"},{"Id":"66","name":"Jaime Rodríguez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"36","PositionTypeId":"37","PositionTypeName":"Sales Force"}],"Selected":false}],"Selected":false},{"Id":"7","name":"OE Truck","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"67","name":"Carlos Bernat ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"7","PositionTypeId":"38","PositionTypeName":"Manager"},{"Id":"68","name":"Carmen del Pozo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"7","PositionTypeId":"39","PositionTypeName":"Administration"},{"Id":"69","name":"Raquel Gómez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"7","PositionTypeId":"39","PositionTypeName":"Administration"}],"Selected":false},{"Id":"8","name":"Pass OE","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"70","name":"Angelina Fuentes ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"8","PositionTypeId":"40","PositionTypeName":"Manager"},{"Id":"71","name":"Mery Fuchs ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"8","PositionTypeId":"41","PositionTypeName":"Administration"},{"Id":"72","name":"Mar Fernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"8","PositionTypeId":"41","PositionTypeName":"Administration"},{"Id":"73","name":"Isabel Tragacete ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"8","PositionTypeId":"41","PositionTypeName":"Administration"}],"Selected":false},{"Id":"9","name":"Customer Service","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"74","name":"Lucas Villalba ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"9","PositionTypeId":"42","PositionTypeName":"Manager"},{"Id":"75","name":"Lorena Martín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"9","PositionTypeId":"43","PositionTypeName":"Claim Administration"},{"Id":"37","name":"Tech. Claims","NodeType":"CompanyNodeType","ParentNodeId":"9","children":[{"Id":"76","name":"Enrique Martinez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"37","PositionTypeId":"44","PositionTypeName":"Tech"},{"Id":"77","name":"Soriel Ion ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"37","PositionTypeId":"44","PositionTypeName":"Tech"}],"Selected":false}],"Selected":false},{"Id":"10","name":"Marketing PLT","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"78","name":"Jorge Cajal ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"10","PositionTypeId":"45","PositionTypeName":"Manager"},{"Id":"38","name":"Comunication","NodeType":"CompanyNodeType","ParentNodeId":"10","children":[{"Id":"79","name":"Raúl Gutierrez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"38","PositionTypeId":"47","PositionTypeName":"Manager"},{"Id":"80","name":"Chiara Woods ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"38","PositionTypeId":"46","PositionTypeName":"E-Business + Brand Image"},{"Id":"81","name":"Gema Cebrián ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"38","PositionTypeId":"48","PositionTypeName":"Promotion + Activities"},{"Id":"82","name":"Sergio García ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"38","PositionTypeId":"49","PositionTypeName":"Events"},{"Id":"83","name":"Ana Martín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"38","PositionTypeId":"50","PositionTypeName":"Trade Marketing"}],"Selected":false},{"Id":"39","name":"Price & Mark Int.","NodeType":"CompanyNodeType","ParentNodeId":"10","children":[{"Id":"84","name":"Tomás Díaz ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"39","PositionTypeId":"51","PositionTypeName":"Manager"},{"Id":"85","name":"Enrique Corral ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"39","PositionTypeId":"52","PositionTypeName":"Price Analyst"},{"Id":"86","name":"David Fernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"39","PositionTypeId":"53","PositionTypeName":"Sales Statistics"}],"Selected":false},{"Id":"40","name":"Product/BI Resp","NodeType":"CompanyNodeType","ParentNodeId":"10","children":[{"Id":"87","name":"Juan Jesús Martín ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"40","PositionTypeId":"54","PositionTypeName":"Manager"},{"Id":"88","name":"Beatriz Arámburu ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"40","PositionTypeId":"55","PositionTypeName":"Product Analyst"}],"Selected":false}],"Selected":false},{"Id":"11","name":"Market Demmand & COD","NodeType":"CompanyNodeType","ParentNodeId":"2","children":[{"Id":"89","name":"Guillermo Quintana ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"11","PositionTypeId":"56","PositionTypeName":"Manager"},{"Id":"109","name":"Ainhoa Etxebarria ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"11","PositionTypeId":"64","PositionTypeName":"Quality Supervisor"},{"Id":"41","name":"Logistic Resp","NodeType":"CompanyNodeType","ParentNodeId":"11","children":[{"Id":"90","name":"Borja Díaz ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"41","PositionTypeId":"57","PositionTypeName":"Manager"},{"Id":"91","name":"Luís Martínez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"41","PositionTypeId":"58","PositionTypeName":"Market Planner"},{"Id":"92","name":"Sandra Martínez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"41","PositionTypeId":"58","PositionTypeName":"Market Planner"},{"Id":"93","name":"Raquel Suarez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"41","PositionTypeId":"58","PositionTypeName":"Market Planner"}],"Selected":false},{"Id":"42","name":"ND / CD T","NodeType":"CompanyNodeType","ParentNodeId":"11","children":[{"Id":"94","name":"María Hernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"42","PositionTypeId":"59","PositionTypeName":"Manager"},{"Id":"95","name":"Sheila Richart ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"42","PositionTypeId":"60","PositionTypeName":"Pool"},{"Id":"96","name":"Alexandra Martínez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"42","PositionTypeId":"60","PositionTypeName":"Pool"},{"Id":"97","name":"Carla Gaona ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"42","PositionTypeId":"60","PositionTypeName":"Pool"},{"Id":"98","name":"Ruth Torres ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"42","PositionTypeId":"60","PositionTypeName":"Pool"},{"Id":"99","name":"Pilar Muñoz ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"42","PositionTypeId":"60","PositionTypeName":"Pool"}],"Selected":false},{"Id":"43","name":"Retailer T","NodeType":"CompanyNodeType","ParentNodeId":"11","children":[{"Id":"100","name":"Virginia Prieto ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"43","PositionTypeId":"61","PositionTypeName":"Manager"},{"Id":"44","name":"Passenger","NodeType":"CompanyNodeType","ParentNodeId":"43","children":[{"Id":"101","name":"Sandra San Miguel ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"44","PositionTypeId":"62","PositionTypeName":"Pool"},{"Id":"102","name":"Carolina Casado ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"44","PositionTypeId":"62","PositionTypeName":"Pool"},{"Id":"103","name":"Sonia Martínez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"44","PositionTypeId":"62","PositionTypeName":"Pool"},{"Id":"104","name":"Verónica Cantos ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"44","PositionTypeId":"62","PositionTypeName":"Pool"},{"Id":"105","name":"Naira Cubillas ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"44","PositionTypeId":"62","PositionTypeName":"Pool"},{"Id":"106","name":"Laura Jerez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"44","PositionTypeId":"62","PositionTypeName":"Pool"}],"Selected":false},{"Id":"45","name":"CVT","NodeType":"CompanyNodeType","ParentNodeId":"43","children":[{"Id":"107","name":"Gemma Álvarez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"45","PositionTypeId":"63","PositionTypeName":"Pool"},{"Id":"108","name":"Leticia Mota ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"45","PositionTypeId":"63","PositionTypeName":"Pool"}],"Selected":false}],"Selected":false},{"Id":"46","name":"Sales Ad Assist","NodeType":"CompanyNodeType","ParentNodeId":"11","children":[{"Id":"110","name":"Úrsula Suárez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"46","PositionTypeId":"65","PositionTypeName":"Assistant"},{"Id":"111","name":"Sandra Jakimczyk ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"46","PositionTypeId":"65","PositionTypeName":"Assistant"},{"Id":"112","name":"Alexandra Trinidad ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"46","PositionTypeId":"65","PositionTypeName":"Assistant"}],"Selected":false}],"Selected":false}],"Selected":false},{"Id":"12","name":"HR","NodeType":"CompanyNodeType","ParentNodeId":"1","children":[{"Id":"113","name":"Maria José Suárez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"12","PositionTypeId":"66","PositionTypeName":"Manager"},{"Id":"114","name":"Elisa Fernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"12","PositionTypeId":"67","PositionTypeName":"Training R."},{"Id":"115","name":"Ana Fernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"12","PositionTypeId":"68","PositionTypeName":"HR Admin."}],"Selected":false},{"Id":"13","name":"F&A","NodeType":"CompanyNodeType","ParentNodeId":"1","children":[{"Id":"116","name":"Beatriz García ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"13","PositionTypeId":"69","PositionTypeName":"Manager"},{"Id":"117","name":"Sonia Benito ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"13","PositionTypeId":"70","PositionTypeName":"Assistant"},{"Id":"14","name":"IT","NodeType":"CompanyNodeType","ParentNodeId":"13","children":[{"Id":"118","name":"Andreas Einfeld ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"14","PositionTypeId":"71","PositionTypeName":"Manager"},{"Id":"119","name":"Facundo Marqués ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"14","PositionTypeId":"72","PositionTypeName":"IT Tecn"}],"Selected":false},{"Id":"51","name":"Controlling","NodeType":"CompanyNodeType","ParentNodeId":"13","children":[{"Id":"131","name":"Juan Ignacio Sánchez Portela","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"51","PositionTypeId":"77","PositionTypeName":"Manager"},{"Id":"132","name":"Marta García ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"51","PositionTypeId":"78","PositionTypeName":"Controller"},{"Id":"133","name":"Katia Casado ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"51","PositionTypeId":"78","PositionTypeName":"Controller"}],"Selected":false},{"Id":"58","name":"Accounting, Tax & Credit","NodeType":"CompanyNodeType","ParentNodeId":"13","children":[{"Id":"120","name":"Juan Carlos Sánchez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"58","PositionTypeId":"88","PositionTypeName":"Manager"},{"Id":"48","name":"Acc Specialist","NodeType":"CompanyNodeType","ParentNodeId":"58","children":[{"Id":"121","name":"Enrique Gómez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"48","PositionTypeId":"74","PositionTypeName":"Specialist"},{"Id":"122","name":"Fernando Sáiz ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"48","PositionTypeId":"74","PositionTypeName":"Specialist"},{"Id":"123","name":"Nuria Soto ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"48","PositionTypeId":"74","PositionTypeName":"Specialist"}],"Selected":false},{"Id":"49","name":"Accounting","NodeType":"CompanyNodeType","ParentNodeId":"58","children":[{"Id":"124","name":"Marisa Giménez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"49","PositionTypeId":"75","PositionTypeName":"Accounting"},{"Id":"125","name":"Lucía Rebollo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"49","PositionTypeId":"75","PositionTypeName":"Accounting"},{"Id":"126","name":"Verónica Jiménez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"49","PositionTypeId":"75","PositionTypeName":"Accounting"},{"Id":"127","name":"Daphne de Simón ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"49","PositionTypeId":"75","PositionTypeName":"Accounting"}],"Selected":false},{"Id":"50","name":"Credit Admin","NodeType":"CompanyNodeType","ParentNodeId":"58","children":[{"Id":"128","name":"Javier Sáiz ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"50","PositionTypeId":"76","PositionTypeName":"Credit Admin"},{"Id":"129","name":"José Gila ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"50","PositionTypeId":"76","PositionTypeName":"Credit Admin"},{"Id":"130","name":"Cristina López ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"50","PositionTypeId":"76","PositionTypeName":"Credit Admin"}],"Selected":false}],"Selected":false}],"Selected":false},{"Id":"16","name":"ContiTrade","NodeType":"CompanyNodeType","ParentNodeId":"1","children":[{"Id":"134","name":"Gonzalo Giménez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"16","PositionTypeId":"79","PositionTypeName":"Manager"},{"Id":"17","name":"Marketing ContiTrade","NodeType":"CompanyNodeType","ParentNodeId":"16","children":[{"Id":"153","name":"Carlos Sierra ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"17","PositionTypeId":"85","PositionTypeName":"Manager"},{"Id":"154","name":"Marta Pulido ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"17","PositionTypeId":"86","PositionTypeName":"Marketing Tech"}],"Selected":false},{"Id":"19","name":"Regional","NodeType":"CompanyNodeType","ParentNodeId":"16","children":[{"Id":"140","name":"Santiago Fernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"19","PositionTypeId":"81","PositionTypeName":"Manager"},{"Id":"141","name":"Rafael Hernández ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"19","PositionTypeId":"82","PositionTypeName":"Talleres"},{"Id":"142","name":"Francisco Martínez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"19","PositionTypeId":"82","PositionTypeName":"Talleres"},{"Id":"143","name":"Francisco Baltasar ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"19","PositionTypeId":"82","PositionTypeName":"Talleres"},{"Id":"144","name":"Antonio Romero ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"19","PositionTypeId":"82","PositionTypeName":"Talleres"}],"Selected":false},{"Id":"52","name":"Sales Force Best Drive","NodeType":"CompanyNodeType","ParentNodeId":"16","children":[{"Id":"135","name":"Marisa de Frutos ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"52","PositionTypeId":"80","PositionTypeName":"Sales Force"},{"Id":"136","name":"Javier Antón ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"52","PositionTypeId":"80","PositionTypeName":"Sales Force"},{"Id":"137","name":"Ángel Guardia ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"52","PositionTypeId":"80","PositionTypeName":"Sales Force"},{"Id":"138","name":"Roberto Meneses ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"52","PositionTypeId":"80","PositionTypeName":"Sales Force"},{"Id":"139","name":"Julio Jiménez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"52","PositionTypeId":"80","PositionTypeName":"Sales Force"}],"Selected":false},{"Id":"54","name":"Administration","NodeType":"CompanyNodeType","ParentNodeId":"16","children":[{"Id":"145","name":"Juan Benito ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"83","PositionTypeName":"Manager"},{"Id":"146","name":"Dolores Amo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"},{"Id":"147","name":"Cristina Gaudioso ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"},{"Id":"148","name":"Cristina Amigo ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"},{"Id":"149","name":"Arancha Costa ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"},{"Id":"150","name":"Yolanda Sánchez ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"},{"Id":"151","name":"Javier Sierra ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"},{"Id":"152","name":"Mª Alegría Luna ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"54","PositionTypeId":"84","PositionTypeName":"Adm. & Teles"}],"Selected":false}],"Selected":false},{"Id":"57","name":"KAM Israel & Cuba","NodeType":"CompanyNodeType","ParentNodeId":"1","children":[{"Id":"155","name":"Javier Santos ","NodeType":"Employee","ParentNodeId":null,"children":[],"Selected":false,"CompanyNodeId":"57","PositionTypeId":"87","PositionTypeName":"Manager"}],"Selected":false}],"Selected":true}]
	};

/*
* Hacemos uso de la biblioteca: SPServices (https://spservices.codeplex.com/)
* que nos permite acceder a la informacion de las listas a traves de los servicios REST que proporciona SharePoint.
*/	
function LoadData(){
	LoadEmployees();
}

function LoadEmployees(){
    $().SPServices({
        operation: "GetListItems",
        async: false,
        listName: "empleados",
        CAMLViewFields:  "<ViewFields Properties='True' />",
        CAMLQuery: "<Query><OrderBy><FieldRef Name='Orden' Ascending='false' /></OrderBy></Query>",        
        completefunc: function (xData, Status) {
			if (Status == "success") {
				$(xData.responseXML).SPFilterNode("z:row").each(function() {                
					
					var companyNode = $(this).attr("ows_Departamento");
					var companyNodeId = null;
					if (companyNode != null)
						companyNodeId = companyNode.substr(0, companyNode.indexOf(';#'));
					
					var positionType = $(this).attr("ows_Puesto");
					var positionTypeId = null, positionTypeName = null;
					if (positionType != null){
						positionTypeId = positionType.substr(0, positionType.indexOf(';#'));
						positionTypeName = positionType.substr(positionType.indexOf(';#') + 2, positionType.length);
					}
					
					var fullName = $(this).attr("ows_Nombre_x0020_y_x0020_apellidos");
					var fullNameSplit = fullName.substr(fullName.indexOf(';#') + 2, fullName.length);
									
					employees.push(
							{
								"Id": $(this).attr("ows_ID"),
								"name": fullNameSplit,
								"NodeType": "Employee",
								"ParentNodeId": null,
								"children": [],
								"Selected": false,
								"CompanyNodeId": companyNodeId,
								"PositionTypeId": positionTypeId,
								"PositionTypeName": positionTypeName
							}
						);				
				});
			} else {				
				PaintException('Excepcion producida al recuperar los empleados. ' + xData.responseText);
			}				
			LoadPositionTypes();			
        }		
    });	
}

function LoadPositionTypes(){
    $().SPServices({
        operation: "GetListItems",
        async: false,
        listName: "puestos",
        CAMLViewFields:  "<ViewFields Properties='True' />",
        CAMLQuery: "<Query><OrderBy><FieldRef Name='Orden' Ascending='false' /></OrderBy></Query>",
        //CAMLRowLimit: 5, 			// Numero de elementos a recuperar
        completefunc: function (xData, Status) {
			if (Status == "success") {			
				$(xData.responseXML).SPFilterNode("z:row").each(function() {
					var name = $(this).attr("ows_Title");
				});
				LoadCompanyNodes();
			} else {
				PaintException('Excepcion producida al recuperar los puestos de trabajo. ' + xData.responseText);
			}
        }
    });
}

function LoadCompanyNodes(){
    $().SPServices({
        operation: "GetListItems", 	
        async: false,				
        listName: "departamentos",		
        CAMLViewFields:  "<ViewFields Properties='True' />",	
        CAMLQuery: "<Query><OrderBy><FieldRef Name='Orden' Ascending='false' /></OrderBy></Query>", 
        //CAMLRowLimit: 5, 			// Numero de elementos a recuperar
        completefunc: function (xData, Status) {
			if (Status == "success") {
				$(xData.responseXML).SPFilterNode("z:row").each(function() {
					var nodeType = "CompanyNodeType";
					var companyNodeId = $(this).attr("ows_ID");
					var parentId = null;
					var selected = false;
					var parent = $(this).attr("ows_Departamento_x0020_padre");
					
					if (parent != null){
						parentId = parent.substr(0, parent.indexOf(';#'));
					}else{
						nodeType = "RootNode";
						selected = true;
					}
					
					var employeesByCompanyNode = getEmployees(companyNodeId);												
					
					companyNodes.push(
							{
								"Id": companyNodeId,
								"name": $(this).attr("ows_Title"),
								"NodeType": nodeType,
								"ParentNodeId": parentId,
								"children": employeesByCompanyNode,
								"Selected": selected
							}
						);
				});            
				ConstructHierarchyData();			
			} else {
				PaintException('Excepcion producida al recuperar los puestos de trabajo. ' + xData.responseText);
			}
        }				
    });	
}

function getEmployees(companyNodeId){
	var employeesByCompanyNode = [];
	$.each(employees, function(i, v) {
		if (v.CompanyNodeId == companyNodeId) {
			employeesByCompanyNode.push(v);			
		}
	});
	return employeesByCompanyNode;
}
	
function checkChild(parentId, parent) {
	$.each(companyNodes, function(i, v) {
		if (v.NodeType == "CompanyNodeType" && v.ParentNodeId == parentId) {			
			parent.children.push(v);			
			checkChild(v.Id, v);						
		}else{
			return;
		}
	});	
}

function ConstructHierarchyData(){						
	var parentId = null;
	globalVar.organizationData = [];
	$.each(companyNodes, function(i, v) {
		if (v.ParentNodeId == null) {
			globalVar.organizationData.push(v);			
			checkChild(v.Id, v);
		}
	});		
}

function getObjects(obj, key, val, nodeType) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val, nodeType));
        } else if (i == key && obj[key] == val && obj['NodeType'] == nodeType) {
            objects.push(obj);
        }
    }
    return objects;
}

function transformNodeToHtml(data, isSub, lonelyEmployee){
	var html = ""; 	

	if (data.length == 1 && data[0].NodeType == "Employee" && !lonelyEmployee)	
		return GetEmployeePersonalInformation(data[0]);
	
	if (isSub)
		html += "<ul>";
	else
		html += "<ul id='org' style='display: none;'>" 		
	
	for(i in data){
		// Si estamos en un departamento que sólo tiene un empleado
		lonelyEmployee = false;		
        html += '<li>';
        if(typeof(data[i].children) === 'object'){ // An array will return 'object'
            if(isSub && data[i].children.length){
                html += '<span class="companyNode" data-id="' + data[i].Id + '" data-type="' + data[i].NodeType + '">' + data[i].name + '</span>';
				if (data[i].children.length == 1)
					lonelyEmployee = true;				
            } else {
				if (data[i].NodeType == "Employee")
					html += '<span class="positionType">' + data[i].PositionTypeName + '</span><br><span data-type="' + data[i].NodeType + '">' + data[i].name + '</span>'; 
				else {
					html += '<span class="companyNode" data-type="' + data[i].NodeType + '">' + data[i].name + '</span>'; 														
					if (data[i].children.length == 1)
						lonelyEmployee = true;
				}
            }			
            html += transformNodeToHtml(data[i].children, true, lonelyEmployee); // Submenu found. Calling recursively same method (and wrapping it in a div)
        } else {
            html += '<span data-id="' + data[i].Id + '"  data-type="' + data[i].NodeType + '">' + data[i].name + '</span>'; //data[i].Id // No submenu
        }
        html += '</li>';		
	}
	html += '</ul>';
	html = html.replace("<ul></ul>", "");	
	return html;	
}

function GetEmployeePersonalInformation(employeeNode){
	return	'<div id="wrapper"> ' +
				'<div class="self"> ' +
					'<h1 class="name">' + employeeNode.name + '<br /> ' +
					'<span>' + employeeNode.PositionTypeName + '</span></h1> ' +
					'<ul> ' +
						'<li class="ad">Direcci&oacute;n</li> ' +
						'<li class="mail">empleado@conti.com</li> ' +
						'<li class="tel">+11 444 555 22 33</li> ' +
						'<li class="web">www.blog_o_paginaPersonal.com</li> ' +
					'</ul> ' +
				'</div> ' +
				'<!-- End Personal Information --> ' +				
			'</div> ';
}

function CustomizeHtml(html){
	var htmlObject = $($.parseHTML(html));	
	var managerEmployees = htmlObject.find("span.positionType:contains('Manager')");
	$(managerEmployees).each(function(i) {		
		var managerCompanyNode = $(this).parent().parent().prev('.companyNode');
		var managerCompanyNodeText =  managerCompanyNode.html();

		var manager = $(this).parent();
		$(this).parent().find('span:last')[0]
		var managerText =  manager.find('span:last').text();

		managerCompanyNode.html(managerCompanyNodeText + "<br />" + "<div class='manager'><span>" + managerText + "</span></div>");
		manager.remove();
	});

	var assistantEmployees = htmlObject.find("span.positionType:contains('Assistant')");
	$(assistantEmployees).each(function(i) {		
		var assistantCompanyNode = $(this).parent().parent().prev('.companyNode');
		var assistantCompanyNodeText =  assistantCompanyNode.html();

		var assistant = $(this).parent();
		$(this).parent().find('span:last')[0]
		var assistantText =  assistant.find('span:last').text();

		assistantCompanyNode.html(assistantCompanyNodeText + "<br />" + "<div class='assistant'><span class='assistantLiteral'>Assistant</span><br/><span>" + assistantText + "</span></div>");
		assistant.remove();
	});	
	
	return htmlObject[0].outerHTML;
}

function PaintException (message){
	$('#errorSection').show();
	$('#errorTitle').append(message + '<br/>');	
}

function HideAssistantSecondLevels(){
	$('.jOrgChart').find('table tbody tr td.node-container div.assistant').remove();
}