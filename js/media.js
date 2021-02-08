var track = [];
    //OST:01
    track[0] = ['4siwSUxKboJurBVDIlsyrU',
        '3XMDQKfDzRHlHYh8BCiTAx',
        '3kH5MCZLHQR9cQ7dz3TPoA',
        '6TNX1kNG5aBPjJ06zq79oA',
        '05KErj6Laey45SfnebpsP0',
        '7jd81fCdmXk39eBCZVWxjT',
        '1Dc4UJcVnKIhaDOqd1QvT5',
        '24qetX799Itmynw8n66MjP',
        '2PqX4JVpG2yulDyhNhX4hm',
        '62ie248woL8NyYveN708Zy']
    //OST:Battle Music
    track[1] = ['1RLYErHDke7vuDrmkBGV56',
        '4rbSlzuOgYQsi19dcR0EXD',
        '22Q5NtQkkuPlMhGSRtrsNH',
        '57pIZ1BuwirdIWiR5dfyCE',
        '5AjVhOxV8TUXfSW1yVawkL',
        '0oJ6wFol7XzPpBYZs66z4w',
        '66tE9W1zoSk4cU4U9y94ql',
        '2hytF5E4OsudE2F7DtTf1c',
        '1dLm5LVNITRzjSubpZns0J',
        '5hiOykATzaXCwXyvgBOP0w']

    //OST:Lyria
    track[2] = ['6BCTh3lCgPSbW0zFTRU5yQ',
        '6j3xgjuuF8LX2upOccz1sS',
        '2nYh8krlsgM8GBL9zESEju',
        '6KLtGBM8J0hGnAJO6oy3gf',
        '7u4o1QmShk4z20IkKA93PT',
        '6a9XEk6RhxBPBnmHO7QA7A',
        '5pWMZ3b4XaPaIJyCqm8c8G',
        '64C710naJeipnzfhIgg3yE',
        '3H3JLk169GTYM24AJHGcjo',
        '5Azd9fb5FNGmLMBHsxZizY']
    //OST:Chaos
    track[3] = ['06svcHx6kqQGTF3xfSZry9',
        '1o5WyrysD52Qruw9kDOguO',
        '36Jry5VgqOWWcm0e30aq0z',
        '0kHKnp1we8G19p3m4WFGl3',
        '6PNPmwDtaMOxiBbj0mhw7p',
        '191YkN1nbT41kXOzGSEdTi',
        '4iEPGomTXgoe8ejATL6gEK',
        '6MoTjb1oUsQqkM56FgTJu2',
        '3DrzQP8xIpn8PC8etiTQU4',
        '3vQ5da6PiI6z4zSUyrm5F6']
    //OST:Promise
    track[4] = ['7H7cUKPrws4KqRWtchDdWC',
        '1anGxCHtZV3BOXN9PRML6a',
        '1Tv8kZrVKv9juImgARabop',
        '7lKFTqc3d9me6Gjo2zFw7i',
        '3t2aPSJ1iPxYXNSK6bCdn0',
        '69mLVWuSwrzhLwzpGyj0Ib',
        '4H8shHHK8CDs77OkMVdM8t',
        '0BtDwX5RdzGkcQaWby4ySP',
        '0u9flB2QMf4tmC81GGxrBF',
        '3wjGCd4wkeVud8lDUWY7A8']

    var temp = document.getElementsByTagName('iframe');
    $(function () {
        $("#carousel img").click(function () {
            var num = parseInt($(this).attr('id').substr(5));
            console.log(num);
            for (j = 0; j < 3; j++) {
                for (k = 0; k <= 20; k += 10) {
                    for (i = 0; i < 10; i++) {
                        $(temp[i + k]).attr("src", `https://open.spotify.com/embed/track/${track[num][i]}`);
                    }
                }
            }
        })
    })

$(function(){
    $('.arrows').mouseover(function(){
        $(this).attr("src",$(this).attr('src').replace("_off.","_on."));
    });
})
$(function(){
    $('.arrows').mouseout(function(){
        $(this).attr("src",$(this).attr('src').replace("_on.","_off."));
    });
})