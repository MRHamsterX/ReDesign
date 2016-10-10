var r = 0; 
var g = 0; 
var b = 0;
//document.getElementById('#gradient').style.height = "50px";
//http://api.vk.com/method/wall.get?v=5.7&count=1&offset=1&domain=lentoru
jQuery( document ).ready(function( $ ) {
    $("#button").click(function(){
        if($("#gradient").is(':visible')){
            //alert($("#gradient").height());
            $("#gradient").animate({height: "hide"}, 1000);
        }else{
            $("#gradient").animate({height: "show"}, 2000);
        }
    });
});
/*function setColor(){
r = 0;
g = 255;
b = 255;

document.getElementById("a").style.color = "rgb("+r+","+g+","+b+")";
}
setColor();*/
$.ajax({  
  url: 'http://api.vk.com/method/groups.getById?gid=27541941&fields=members_count',  
  dataType: "jsonp",  
  success:function(e){ 
$('#vkontakte_count').html(e.response[0].members_count) 
}  
});
/*{
	"response": {
		"count": 610,
		"items": [
			{
				"id": 789,
				"from_id": -94909892,
				"owner_id": -94909892,
				"date": 1475053436,
				"post_type": "post",
				"text": "Нейромедиаторы, часть 1: дофамин, норадреналин, серотонин",
				"attachments": [
					{
						"type": "link",
						"link": {
							"url": "https://geektimes.ru/company/atlasbiomed/blog/280816/",
							"title": "Нейромедиаторы, часть 1: дофамин, норадреналин, серотонин",
							"description": "Нейромедиаторы — это праздник, который всегда с тобой. Мы постоянно слышим о том, что именно они дарят чувства радости и удовольствия, но мало знаем о том, как...",
							"image_src": "http://cs837525.vk.me/v837525651/1f24/eUCV5fjHSlI.jpg",
							"image_big": "http://cs837525.vk.me/v837525651/1f26/blHhuSPm-Kg.jpg"
						}
					}
				],
				"comments": {
					"count": 0
				},
				"likes": {
					"count": 0
				},
				"reposts": {
					"count": 0
				}
			},
			{
				"id": 788,
				"from_id": -94909892,
				"owner_id": -94909892,
				"date": 1474795014,
				"post_type": "post",
				"text": "лол",
				"attachments": [
					{
						"type": "link",
						"link": {
							"url": "https://uk.wikipedia.org/wiki/%D0%9F%D1%83%D1%82%D1%96%D0%BD_%E2%80%94_%D1%85%D1%83%D0%B9%D0%BB%D0%BE",
							"title": "Путін — хуйло!",
							"description": "Матеріал з Вікіпедії — вільної енциклопедії. Увага! Ненормативна лексика! Зміст цієї статті або розділу може здаватися деяким читачам непристойним або образливим. Путін — хуйло Підпис зображення: Верхній ряд: написи на парканах у Луганську та Броварах. Посередині: Володимир Путін, написи біля Посольства",
							"image_src": "http://cs626831.vk.me/v626831732/2e27c/SNoPjObu-Kk.jpg"
						}
					}
				],
				"comments": {
					"count": 0
				},
				"likes": {
					"count": 0
				},
				"reposts": {
					"count": 0
				}
			},
			{
				"id": 787,
				"from_id": -94909892,
				"owner_id": -94909892,
				"date": 1473752794,
				"post_type": "post",
				"text": "ШОК!",
				"copy_history": [
					{
						"id": 280329,
						"owner_id": -29287308,
						"from_id": -29287308,
						"date": 1473714258,
						"post_type": "post",
						"text": "макзимальный репаст",
						"attachments": [
							{
								"type": "photo",
								"photo": {
									"id": 434292944,
									"album_id": -7,
									"owner_id": -29287308,
									"user_id": 100,
									"photo_75": "http://cs637520.vk.me/v637520580/c929/9hNa31oNzOQ.jpg",
									"photo_130": "http://cs637520.vk.me/v637520580/c92a/EVxYPPRbIZ4.jpg",
									"photo_604": "http://cs637520.vk.me/v637520580/c92b/tQQs4nz66U4.jpg",
									"photo_807": "http://cs637520.vk.me/v637520580/c92c/3GO2RMQhBz4.jpg",
									"width": 743,
									"height": 717,
									"text": "",
									"date": 1473714259,
									"post_id": 280329,
									"access_key": "13d5f402b90e45cdae"
								}
							}
						],
						"post_source": {
							"type": "vk"
						}
					}
				],
				"comments": {
					"count": 0
				},
				"likes": {
					"count": 0
				},
				"reposts": {
					"count": 0
				}
			}
		]
	}
}*/