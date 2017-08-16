// data file for our movie page
var  movies = [
    {"id": 1 , "name": "American Hustle", "year": 2013, "seen": false, "dl": true},
    {"id": 2, "name": "Black Mass", "year": 2015, "seen": false, "dl": true},
    {"id": 3, "name": "Book of Eli", "year":2010 , "seen": false, "dl": true},
    {"id": 4, "name": "Book Thief", "year": 2013, "seen": false, "dl": true},
    {"id": 5, "name": "Cloud Atlas", "year": 2012, "seen": false, "dl": true},
    {"id": 6, "name": "Dallas Buyers Club", "year": 2013, "seen": false, "dl": true},
    {"id": 7, "name": "Danish Girl", "year": 2015, "seen": false, "dl": true},
    {"id": 8, "name": "Firm", "year": 1993, "seen": false, "dl": true},
    {"id": 9, "name": "Foxcatcher", "year": 2014, "seen": false, "dl": true},
    {"id": 10, "name": "Gone Girl", "year": 2014, "seen": false, "dl": true},
    {"id": 11, "name": "Green Mile", "year": 1999, "seen": false, "dl": true},
    {"id": 12, "name": "Into the Woods", "year": 2014, "seen": false, "dl": false},
    {"id": 13, "name": "Les Misserables", "year": 2012, "seen": false, "dl": false},
    {"id": 14, "name": "Lock, Stock and Two Smoking Barrels", "year": 1998, "seen": false, "dl": true},
    {"id": 15, "name": "Lord of the Rings: Return of the King", "year": 2003, "seen": false, "dl": true},
    {"id": 16, "name": "Oblivion", "year": 2013, "seen": false, "dl": true},
    {"id": 17, "name": "Rain Man", "year": 1988, "seen": false, "dl": true},
    {"id": 18, "name": "Silence of the Lambs", "year":1991 , "seen": false, "dl": false},
    {"id": 19, "name": "Silver Linings Playbook", "year": 2012, "seen": false, "dl": true},
    {"id": 20, "name": "Sin City: A Dame to Kill For", "year": 2014, "seen": false, "dl": false},
    {"id": 21, "name": "Spotlight", "year": 2015, "seen": false, "dl": true},
    {"id": 22, "name": "Theory of Everything", "year": 2014, "seen": false, "dl": true},
    {"id": 23, "name": "Reservoir Dogs", "year": 1992, "seen": false, "dl": false},
    {"id": 24, "name": "Rocknrolla", "year": 2008, "seen": false, "dl": true},
    {"id": 25, "name": "Trainspotting", "year": 1996, "seen": false, "dl": false},
    {"id": 26, "name": "Ben Hur", "year": 2016, "seen": false, "dl": false},
    {"id": 27, "name": "Bleed for This", "year": 2016, "seen": false, "dl": false},
    {"id": 28, "name": "Collateral Beauty", "year": 2016, "seen": false, "dl": false},
    {"id": 29, "name": "Eddie the Eagle", "year": 2016, "seen": false, "dl": false},
    {"id": 30, "name": "Fences", "year": 2016, "seen": false, "dl": false},
    {"id": 31, "name": "Girl on the Train", "year": 2016, "seen": false, "dl": false},
    {"id": 32, "name": "Independence Day 2", "year": 2016, "seen": false, "dl": false},
    {"id": 33, "name": "Jack Reacher 2", "year": 2016, "seen": false, "dl": false},
    {"id": 34, "name": "Jason Bourne", "year": 2016, "seen": false, "dl": false},
    {"id": 35, "name": "Jungle Book", "year": 2016, "seen": false, "dl": false},
    {"id": 36, "name": "Money Monster", "year": 2016, "seen": false, "dl": false},
    {"id": 37, "name": "Moonlight", "year": 2016, "seen": false, "dl": false},
    {"id": 38, "name": "Nocturnal Animals", "year": 2016, "seen": false, "dl": false},
    {"id": 39, "name": "Our Kind of Traitor", "year": 2016, "seen": false, "dl": false},
    {"id": 40, "name": "Snowden", "year": 2016, "seen": false, "dl": true},
    {"id": 41, "name": "San Andreas", "year": 2016, "seen": false, "dl": false},
    {"id": 43, "name": "La La Land", "year": 2016, "seen": false, "dl": true},
    {"id": 44, "name": "The Accountant", "year": 2016, "seen": false, "dl": false},
    {"id": 45, "name": "Alien: Covenant", "year": 2017, "seen": false, "dl": true},
    {"id": 46, "name": "Secret Life of Pets", "year": 2016, "seen": false, "dl": false},
    {"id": 47, "name": "Atomic Blonde", "year": 2017, "seen": false, "dl": false},
    {"id": 48, "name": "Blade Runner", "year": 2017, "seen": false, "dl": false},
    {"id": 49, "name": "Dark Tower", "year": 2017, "seen": false, "dl": false},
    {"id": 50, "name": "Despicable Me 3", "year": 2017, "seen": false, "dl": false},
    {"id": 51, "name": "Everything, Everything", "year": 2017, "seen": false, "dl": true},
    {"id": 52, "name": "Ghost in the Shell", "year": 2017, "seen": false, "dl": false},
    {"id": 53, "name": "Guardinas of the Galaxy vol. 2", "year": 2017, "seen": false, "dl": true},
    {"id": 54, "name": "Jumanji", "year": 2017, "seen": false, "dl": false},
    {"id": 55, "name": "Justice League", "year": 2017, "seen": false, "dl": false},
    {"id": 56, "name": "Kingsman 2", "year": 2017, "seen": false, "dl": false},
    {"id": 57, "name": "Kong: Skull Island", "year": 2017, "seen": false, "dl": false},
    {"id": 58, "name": "Life", "year": 2017, "seen": false, "dl": false},
    {"id": 59, "name": "Pirrates of Carriebean", "year": 2017, "seen": false, "dl": false},
    {"id": 60, "name": "Power Rangers", "year": 2017, "seen": false, "dl": false},
    {"id": 61, "name": "Spiderman: Homecoming", "year": 2017, "seen": false, "dl": false},
    {"id": 62, "name": "Star Wars: The Last Jedi", "year": 2017, "seen": false, "dl": false},
    {"id": 63, "name": "Thor: Ragnarok", "year": 2017, "seen": false, "dl": false},
    {"id": 64, "name": "Trainspotting T2", "year": 2017, "seen": false, "dl": false},
    {"id": 65, "name": "Wonder Woman", "year": 2017, "seen": false, "dl": false},
    {"id": 66, "name": "Tranformers: Last Knight", "year": 2017, "seen": false, "dl": false},
    {"id": 67, "name": "Valerian", "year": 2017, "seen": false, "dl": false},
    {"id": 68, "name": "Split", "year": 2017, "seen": false, "dl": true}
];
//create Welcome Page
//Three Panels - Movies, TV Series, Add New

var Panel = Backbone.Model.extend({});
var moviePanel = new Panel({
    name: 'See Movies',
    text: 'See full list of movies you want to watch, change their status or edit them.'
});
var seriesPanel = new Panel({
    name: 'See TV Series',
    text: 'See full list of TV Series you are currently watching, your progress and  desired TV Shows.'
});
var addPanel = new Panel({
    name: 'Add New Item',
    text: 'If you want to add new Movie or TV Series on the list, you can do it right here!'
});
var PanelView = Backbone.View.extend({
    className: 'panel',
    template: _.template('<div class="panel-heading"><%= name %></div><div class="panel-body"><%= text %></div>'),
    render: function(){
        //console.log('ETF');
        var attr = this.model.toJSON();
        this.$el.html(this.template(attr));
        //console.log(this.el);
        $('.panels').append(this.el);
    },
    addClass: function(name){
        this.el.className += ' ' + name;
    },
    remove: function() {
        this.$el.remove();
    }
});
var moviePanelView = new PanelView({model: moviePanel});
moviePanelView.addClass('movie-panel');
var seriesPanelView = new PanelView({model: seriesPanel});
seriesPanelView.addClass('series-panel');
var addPanelView = new PanelView({model: addPanel});
addPanelView.addClass('add-panel');


// create Movie model
var Movie = Backbone.Model.extend({});

//create View for Movie
var MovieView = Backbone.View.extend({
    template: _.template('<input type="checkbox" /><p><%= name %></p>'),
    render: function(){
        var attr = this.model.toJSON();
        this.$el.html(this.template(attr));
        return this;
    }
});
// create Collection of Movie models
var MovieList = Backbone.Collection.extend({ model: Movie});
var movieList = new MovieList();
movieList.reset(movies);

//create View for Collection
var MovieListView = Backbone.View.extend({
    template: _.template('<div class="col-md-4 old-movie"></div>' +
        '<div class="col-md-4 last-movie"></div>' +
        '<div class="col-md-4 this-movie"></div>'),
    render: function() {
        this.$el.append(this.template());
        this.collection.forEach(this.nieco(this.model), this);
    },
    nieco: function(model) {
            var movieView = new MovieView({model: model});
            switch (movieView.model.get('year')) {
                case 2016:
                    this.$('.last-movie').append(movieView.render().el);
                    break;
                case 2017:
                    this.$('.this-movie').append(movieView.render().el);
                    break;
                default:
                    this.$('.old-movie').append(movieView.render().el);
            }
        }
        $('.item-list').append(this.el);
        this.add_banner();
    },
    add_banner: function(){
        var html = '<div class="banner"><h3>Movie List</h3><a href"#">Back</a></div>';
        var div = $('.panels');
        div.css('margin-top', '15px');
        div.append(html);
    },
    toggleStatus: function(){
        console.log(this.el);
    }
});
var movieListView = new MovieListView({
    collection: movieList
});

var init = function(){
    //console.log("im running...");
    moviePanelView.render();
    seriesPanelView.render();
    addPanelView.render();
};
var remove_panels = function(){
    //console.log('This is running too...');
    moviePanelView.remove();
    seriesPanelView.remove();
    addPanelView.remove();
};
var render_movie = function () {
    remove_panels();
    movieListView.render();
};
var toggleStatus = function() {
    movieListView.toggleStatus(event);
};
$(function(){
    init();
});
moviePanelView.$el.delegate('.panel-heading','click', render_movie);
movieListView.$el.delegate('input', 'click', toggleStatus);


