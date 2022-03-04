namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const Danger = SpriteKind.create()
    export const rain = SpriteKind.create()
    export const save = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (operate.vy == 0) {
        operate.vy = -160
    }
})
scene.onOverlapTile(SpriteKind.Player, img`
            myTile1
        `, function (sprite2, location2) {
    map_level += 1
    Level()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Danger, function (sprite4, otherSprite2) {
    info.changeLifeBy(-1)
    otherSprite2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite3, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function Level () {
    if (map_level == 0) {
        tiles.setCurrentTilemap(tilemap`層級1`)
    } else if (map_level == 1) {
        tiles.setCurrentTilemap(tilemap`層級2`)
    } else if (map_level == 2) {
        tiles.setCurrentTilemap(tilemap`層級3`)
    } else {
        game.over(true, effects.confetti)
    }
    tiles.placeOnRandomTile(operate, img`
                myTile4
            `)
    for (let _1 of tiles.getTilesByType(img`
                myTile4
            `)) {
        tiles.setTileAt(_1, assets.tile`transparency16`)
    }
    info.setLife(3)
    for (let _2 of sprites.allOfKind(SpriteKind.Flower)) {
        _2.destroy()
    }
    for (let _3 of sprites.allOfKind(SpriteKind.Coin)) {
        _3.destroy()
    }
    for (let _22 of tiles.getTilesByType(img`
                myTile2
            `)) {
        _123 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . e e e e e . . . . . . 
            . . . . e e e e e e e . . . . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(_123, _22)
        tiles.setTileAt(_22, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, img`
            myTile0
        `, function (sprite, location) {
    game.over(false, effects.dissolve)
})
let dang: Sprite = null
let _123: Sprite = null
let operate: Sprite = null
let map_level = 0
scene.setBackgroundColor(1)
effects.starField.startScreenEffect()
let run = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . . 6 6 d 6 6 6 6 6 d 6 6 . . 
    . . . . 6 6 6 d 6 d d 6 6 . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 6 6 6 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 6 . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 6 . . . . 
    . . 6 d d 6 6 6 6 6 6 6 6 . . . 
    . . 6 6 6 6 d d d 6 6 6 6 . . . 
    . . . . . . 6 6 6 d 6 6 6 . . . 
    . . . . . . . . . 6 6 6 6 . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
map_level = 0
operate = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(operate, 80, 0)
scene.cameraFollowSprite(operate)
Level()
game.onUpdate(function () {
    if (operate.vy < 0) {
        operate.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f . . . . . . . . . . 
            . . f . . . f . . . . f . f . . 
            . . f . . . f . . . . f . f . f 
            . . f . . . f . . f f f . f f f 
            . . . f f f . . . . f f . f f . 
            . . . . f . . . . . f f . f . . 
            . . . . f . . . f f f f . f f f 
            . . . . f f f . . . . f . f . . 
            . . . . f . . . . . f f . f . . 
            . . f . f . . . . . f . . f . . 
            . . f . f . . . . f f . . f f f 
            . f f f f f f . f f . . . . f f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (operate.vy > 0) {
        operate.setImage(img`
            f f f . . . . . . . f f f . . . 
            f . . f . . . . f f f . . . . . 
            f . . f . . . f f . . f . . . . 
            f . f . . . f f f . . f f . . . 
            f f . . . f f . . f f f . . . . 
            f . f . . . . . f f f f . . . . 
            f . . f . . . f f . . f f f . . 
            f . . f . . f f . . . . . f f . 
            f f f . . . . . . . f . . . . . 
            f . . . . . . f f f f f f f . . 
            f . . . . . f . . . f . . . . . 
            f . . . . . f . . . f . . . . . 
            f . . . . . f f f f f f f . . . 
            f . . . . . . . . . f . . . . . 
            f . . . . . . . . . f . . . . . 
            f . . . . . . . . . . . . . . . 
            `)
    } else if (operate.vx != 0) {
        operate.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . f f f f f f f f f f f . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . f . . . f f f f f . . . . 
            . . . f . . . f . . . . . . . . 
            . . f . . . . f . . . . . . . . 
            . f f f f f . f . . . . . . . . 
            f f . . . . f f f f f f . . . . 
            . . . . . . . . . . . . f f f f 
            `)
    } else {
        operate.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . f . . . . 
            . . f . . . . . . . . f . . . . 
            . . f f . . . . . . . f . . . . 
            . . . f . . . . . . . f f f f . 
            f f f f f f f . . . . f . . . . 
            . f . . f . . . . f f f f f f . 
            . f . . f . . . . f . . . . f . 
            . f . . f . . . . f . . . . f . 
            . . f . f . . . . f . . . . f . 
            . . f . f f f . . f . . . . f . 
            . . f f f f . . . f . . . . f . 
            f f f f . . . . . f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if ((operate.isHittingTile(CollisionDirection.Left) || operate.isHittingTile(CollisionDirection.Right)) && operate.vy >= 0) {
        operate.vy = 0
        operate.ay = 0
        operate.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . . f . . . . f . . 
            . . . f . . . f f f . . . f . . 
            . f f f f f . . f . . . . f . . 
            . . . f . . f f f f f . . f . . 
            . . . f . f . . f . . . . f f . 
            . . f f f . . . f . . . . f f f 
            . f f f . . . . f . . . . f . f 
            . . . f . . . f f f f . . f . . 
            . f . f . . . . f . . . . f . . 
            . . f f . . . . f . . . . f . . 
            . . . f . . f f f f f f . f . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        operate.ay = 350
    }
    if (operate.vx < 0 || operate.isHittingTile(CollisionDirection.Left)) {
        operate.image.flipX()
        operate.setImage(operate.image)
    }
})
game.onUpdateInterval(2000, function () {
    dang = sprites.createProjectileFromSprite(run[randint(0, run.length - 1)], operate, 30, 0)
    dang.setKind(SpriteKind.Danger)
    dang.setPosition(operate.x - 60, operate.y - randint(-10, 10))
})
