var initialCats = [
    {
        name: "Tabby",
        clickCount: 0,
        imgSrc: "img/22252709_010df3379e_z.jpg",
        nickNames: ["Tabby", "Tab Tab", "Mr. T", "T Bone"]
    },
    {
        name: "Scooby",
        clickCount: 0,
        imgSrc: "img/434164568_fea0ad4013_z.jpg",
        nickNames: ["Scooby", "Dooby", "Doo"]
    }
]


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);

    this.nickNames = ko.observableArray(data.nickNames);

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

    // this.catList = ko.observableArray([]);
    self.catList = ko.observableArray([]);

    initialCats.forEach( function(catItem){
        self.catList.push(new Cat(catItem));
    });

    // this.currentCat = ko.observable(this.catList()[0]);
    self.currentCat = ko.observable(self.catList()[0]);

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    self.setCurrentCat = function(clickedCat) {
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new ViewModel());
