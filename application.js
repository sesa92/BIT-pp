'use strict';

(function application() {
    console.log('Hi!')

    function App(name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }


    function MobileApp(name, licence, stars, platforms = []) {
        App.call(this, name, licence, stars)
        this.platforms = platforms;
    }

    function WebApp(name, url, technologies = [], licence, stars) {
        App.call(this, name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }

    MobileApp.prototype = Object.create(App.prototype);
    MobileApp.prototype.constructor = MobileApp;

    WebApp.prototype = Object.create(App.prototype);
    WebApp.prototype.constructor = WebApp;


    WebApp.prototype.getData = function() {
        return this.name + ', ' + this.url + ', ' + this.technologies + ', '+ this.licence + ', ' + this.stars;
    }

    WebApp.prototype.reactBased = function() {
        if (this.technologies.includes('react')) {
            return true;
        } else {
            return false;
        }
    }

    MobileApp.prototype.getData = function() {
        return this.name + ', ' + this.platforms + ', ' + this.licence + ', ' + this.stars;
    }

    MobileApp.prototype.forAndroid = function() {
        if(this.platforms.includes('Android')) {
            return true;
        } else {
            return false;
        }
    }

    App.prototype.isCCLicence = function() {
        if(this.licence == 'CC') {
            return true;
        } else {
            return false;
        }
    }

    App.prototype.like = function() {
        return this.stars + 1;
    }

    App.prototype.showStars = function() {
        return this.stars;
    }

    var web = new WebApp('Instagram', 'www.instagram.com', ['HTML', 'CSS', 'react'], 'Facebook', 4);
    var mob = new MobileApp('Instagram', 'Facebook', 5, ['Ios', 'Android', 'Bla']);

    console.log(web.getData());
    console.log(mob.getData());
    console.log(mob.forAndroid());
    console.log(web.showStars());
    console.log(mob.like());

})()