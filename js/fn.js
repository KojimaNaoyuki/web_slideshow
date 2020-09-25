console.log('javascript(fn.js)');

var SlideShow = function() {
    let _parts_src = ['img/img1.jpg','img/img2.jpg','img/img3.jpg']; //読み取り専用
    let _num = 0;

    Object.defineProperties(this, {
        parts_src : {
            get : function() {
                return _parts_src;
            }
        },
        num : {
            get : function() {
                return _num;
            },
            set : function(num) {
                _num = num
            }
        }
    });
}

SlideShow.prototype = {
    slideRe : function() {
        if(num == 2) {
            num = 0;
        } else {
            this.num++;
        }
        document.getElementById('id_img1').src = parts_src[num];
    }
}