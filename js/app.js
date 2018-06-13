var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");

    this.nickName = ko.observableArray([
        {name: 'Tab Tab'},
        {name: 'Mr. T'},
        {name: 'T Bone'}
    ]);

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


var ViewModel = function() {

    var self = this;

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };


}

ko.applyBindings(new ViewModel());
