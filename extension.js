const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');

//suppose the map is a scenograph of earth, then seeing from the middle of the map into the center of earth, the horizontal distance equals EARTH_RADIUS * Math.sin(longitude range), and the vertical distance equals EARTH_RADIUS * Math.sin(latitude range). At last, we need to replace EARTH_RADIUS with the coord range.
class Scratch3ML4KUKMap {

    constructor() {
        this.EARTH_RADIUS = 6371;

        this.TOP_LEFT = {
            mapCoordsX : -34, mapCoordsY : 138,
            lat : 57.8677, lon : -5.7539
        };
        this.BOTTOM_RIGHT = {
            mapCoordsX : 138, mapCoordsY : -175,
            lat : 50.094, lon : 1.4349
        };

	this.MIDDLE = {
		mapCoordsX: (this.TOP_LEFT.mapCoordsX + this.BOTTOM_RIGHT.mapCoordsX)/2.0, 
		mapCoordsY: (this.TOP_LEFT.mapCoordsY + this.BOTTOM_RIGHT.mapCoordsY)/2.0, 
		lat: (this.TOP_LEFT.lat + this.BOTTOM_RIGHT.lat)/2.0, 
		lon: (this.TOP_LEFT.lon + this.BOTTOM_RIGHT.lon)/2.0
	};

	this.LAT_RANGE = Math.sin(this.BOTTOM_RIGHT.lat - this.TOP_LEFT.lat);
	this.LON_RANGE = Math.sin(this.TOP_LEFT.lon - this.BOTTOM_RIGHT.lon);
        this.X_RANGE = this.BOTTOM_RIGHT.mapCoordsX - this.TOP_LEFT.mapCoordsX;
        this.Y_RANGE = this.BOTTOM_RIGHT.mapCoordsY - this.TOP_LEFT.mapCoordsY;
    }


    getInfo () {
        return {
            id : 'mlforkidsUKMap',
            name : 'UK Map',

            blocks: [
                {
                    opcode : 'ukMapX',
                    text : 'map X coordinate for [LATITUDE] , [LONGITUDE]',
                    blockType : BlockType.REPORTER,
                    arguments : {
                        LATITUDE : {
                            type : ArgumentType.NUMBER,
                            defaultValue : 50.6787
                        },
                        LONGITUDE : {
                            type : ArgumentType.NUMBER,
                            defaultValue : -1.5667
                        }
                    },
                },
                {
                    opcode : 'ukMapY',
                    text : 'map Y coordinate for [LATITUDE] , [LONGITUDE]',
                    blockType : BlockType.REPORTER,
                    arguments : {
                        LATITUDE : {
                            type : ArgumentType.NUMBER,
                            defaultValue : 50.6787
                        },
                        LONGITUDE : {
                            type : ArgumentType.NUMBER,
                            defaultValue : -1.5667
                        }
                    },
                }
            ]
        }
    }


    ukMapX (args) {
        return this._latlonToMapCoords(parseFloat(args.LATITUDE, 10), parseFloat(args.LONGITUDE, 10)).x;
    }
    ukMapY (args) {
        return this._latlonToMapCoords(parseFloat(args.LATITUDE, 10), parseFloat(args.LONGITUDE, 10)).y;
    }

    _latlonToMapCoords (lat, lon){
	return {
		y : Math.sin(lat - this.MIDDLE.lat) / this.LAT_RANGE * this.Y_RANGE + this.MIDDLE.mapCoordsY,
		x : Math.sin(lon - this.MIDDLE.lon) / this.LON_RANGE * this.X_RANGE + this.MIDDLE.mapCoordsX
	};
    }
}



module.exports = Scratch3ML4KUKMap;
