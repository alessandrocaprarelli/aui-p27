var utils = {
    /**
     * Creates an entity of the given type and adds it to the scene.
     * It returns the element.
     * @param type
     * @param options
     */
    addEntity: function (type, options) {
        var el = document.createElement(type);
        for(var key in options){
            el.setAttribute(key, options[key])
        }
        document.querySelector('a-scene').appendChild(el);
        return el;
    },
    /**
     * Removes the entity from the scene.
     * @param id
     */
    removeEntity: function (id) {
        var el = document.getElementById(id);
        el.parentNode.removeChild(el)
    },
    /**
     * It adds the entity inside the given entity.
     * @param id
     * @param type
     * @param options
     */
    addEntityIntoEntity: function (id, type, options) {
        var el = document.createElement(type);
        for(var key in options){
            el.setAttribute(key, options[key])
        }
        document.getElementById(id).appendChild(el);
        return el;
    },
    /**
     * It shows the entity setting the visible attribute to true.
     * @param id
     */
    showEntity: function (id){
        var el = document.getElementById(id);
        if(!el){
            console.error('[utils][showEntity] Error while showing entity: ', id, el)
        }else{
            el.setAttribute('visible', 'true')
        }
    },
    /**
     * It hides the entity setting the visible attrivute to false.
     * @param id
     */
    hideEntity: function (id){
        var el = document.getElementById(id);
        if(!el){
            console.error('[utils][hideEntity] Error while hiding entity: ', id, el)
        }else{
            el.setAttribute('visible', 'false')
        }
    },
    /**
     * It scales and moves the passed object.
     * Used for gltf models with unknown dimensions.
     * @param object
     * @param dimensions
     * @param position
     */
    scaleAndMove: function (object, dimensions, position) {
        var bbox = new THREE.Box3().setFromObject(object);
        var currentDimensions = {};
        currentDimensions.y = bbox.max.y - bbox.min.y;
        currentDimensions.z = bbox.max.z - bbox.min.z;
        currentDimensions.x = bbox.max.x - bbox.min.x;
        console.log('Bbox of:', object, bbox, currentDimensions);
        object.el.setAttribute('scale', {x: dimensions.x/currentDimensions.x, y: dimensions.y/currentDimensions.y, z: dimensions.z/currentDimensions.z})
        object.el.setAttribute('position', position);
    },
    getQueryString: function (variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){
                return pair[1];
            }
        }
        return false;
    }
};