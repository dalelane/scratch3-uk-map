const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');


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

        this.TOP_LEFT_POS = this._latlonToGlobalCoords(this.TOP_LEFT.lat, this.TOP_LEFT.lon);
        this.BOTTOM_RIGHT_POS = this._latlonToGlobalCoords(this.BOTTOM_RIGHT.lat, this.BOTTOM_RIGHT.lon);

        this.X_RANGE = this.BOTTOM_RIGHT_POS.x - this.TOP_LEFT_POS.x;
        this.Y_RANGE = this.BOTTOM_RIGHT_POS.y - this.TOP_LEFT_POS.y;
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




    _latlonToGlobalCoords (lat, lon){
        return {
            x : this.EARTH_RADIUS * lon * Math.cos((this.TOP_LEFT.lat + this.BOTTOM_RIGHT.lat) / 2),
            y : this.EARTH_RADIUS * lat
        };
    }


    _latlonToMapCoords (lat, lon){
        const pos = this._latlonToGlobalCoords(lat, lon);

        const percentX = ((pos.x - this.TOP_LEFT_POS.x) / this.X_RANGE);
        const percentY = ((pos.y - this.TOP_LEFT_POS.y) / this.Y_RANGE);

        const mapDistanceX = this.BOTTOM_RIGHT.mapCoordsX - this.TOP_LEFT.mapCoordsX;
        const mapDistanceY = this.BOTTOM_RIGHT.mapCoordsY - this.TOP_LEFT.mapCoordsY;

        return {
            x: this.TOP_LEFT.mapCoordsX + mapDistanceX * percentX,
            y: this.TOP_LEFT.mapCoordsY + mapDistanceY * percentY
        };
    }
}



module.exports = Scratch3ML4KUKMap;
