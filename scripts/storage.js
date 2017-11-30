(function(){
    var storageHash = {};

    window.storage = storage;

    function storage(name){
        if ( !(this instanceof arguments.callee) ){
            return new storage(name); 
        }

        storageHash[name] = getFromDb(name);
        storageHash[name].__proto__ = this;

        this.DBname = name;
        this.DB = storageHash[name];

        this.save = () => {
            saveToDb(this.DBname, this.DB);
        }

        this.push = function() {
            var collection = [].slice.apply( arguments );
            collection = collection.map(item => generateId(item) );
            storage.prototype.push.apply(this, collection);
        }

        return storageHash[name];
    }

    storage.prototype = Array.prototype;

    function generateId(item){
        if(item instanceof Object){
            item._id = Date.now() + Math.round(Math.random() * 1000);
        }
        return item;
    }

    function saveToDb(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    function getFromDb(key){
        var data = localStorage.getItem(key);
        if(!data) return [];
        return JSON.parse( data );
    }
})();