
$(function () {
    var html = $('#lodash-template').html();
    var profile = _.template(html);
    var profileData = {
        name: "Серватинский Юрий Андреевич",
        photoLink: "img/moto.jpg",
        photoAlt: "Фото Серватинский Юрий Андреевич",
        work: "Будущий Front-End разработчик",
        items:[
            "Хочу писать красивые сайты",
            "Хочу постоянно развиваться в этой отрасли",
        ],
        phoneInfo: "Мой контактный телефон",
        phoneNum: "+380985089965",
        vkProfil: "Мой профиль вконтакте",
        vkLink: "https://vk.com/benidikt2013",
        feedback: ""
    };

    $('#lodash_block').html(profile(profileData));

});



































//


































