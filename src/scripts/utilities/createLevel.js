export default function createLevel(scene, tileset_key, tileset_name, tileset_tag) {
    scene.map = scene.make.tilemap({ key: tileset_key, tileWidth: 16, tileHeight: 16 });
    scene.map_layers = scene.map.addTilesetImage(tileset_name, tileset_tag);
}
