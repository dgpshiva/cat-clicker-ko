var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");

    this.nickName = ko.observableArray([
        {name: 'Tab Tab'},
        {name: 'Mr. T'},
        {name: 'T Bone'}
    ]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.catLevel = ko.computed(function() {
        if (this.clickCount() >=0 && this.clickCount() <= 10) {
            return "Infant";
        }
        else if (this.clickCount() >= 10 && this.clickCount() <= 30 ){
            return "New Born";
        }
        else {
            return "Pro";
        }
    }, this);
}

ko.applyBindings(new ViewModel());
