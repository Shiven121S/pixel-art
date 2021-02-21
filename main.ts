let textSprite = textsprite.create("MAGNETIC ")
let textSprite2 = textsprite.create("KNIGHT")
textSprite.setPosition(50, 19)
textSprite2.setPosition(77, 37)
textSprite.setMaxFontHeight(10)
textSprite2.setMaxFontHeight(10)
color.setColor(2, color.rgb(95, 95, 95))
let black = 0
let grey = 0
tiles.setTilemap(tilemap`level1`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    if (Math.percentChance(50)) {
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
}
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    black += 1
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    grey += 1
}
console.log("Black: " + black)
console.log("Grey: " + grey)
