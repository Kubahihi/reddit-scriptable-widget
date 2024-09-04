// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-purple; icon-glyph: laugh;
var subreddit = "czechmemes"

var dataRequest = new Request(`https://meme-api.com/gimme/${subreddit}`)
var dataResult = await dataRequest.loadJSON()
console.log(dataResult)
var imgRequest = new Request(dataResult.url)
var imgResult = await imgRequest.loadImage()

var widget = new ListWidget()
widget.addImage(imgResult)

let gradient = new LinearGradient()
  gradient.locations = [0, 1]
  gradient.colors = [
    new Color("141414"),
    new Color("000820")
  ]

widget.backgroundGradient = gradient
let Title = widget.addText(`Posláno ze subbreditu: ${subreddit}`)
let Title1 = widget.addText(`Nadpis: ${dataResult.title}`)
let Title2 = widget.addText(`Autor: ${dataResult.author}`)
let titleStack = widget.addStack()
titleStack.layoutHorizontally()
titleStack.addSpacer()

widget.url = dataResult.postLink
Script.setWidget(widget)
Script.complete()
widget.presentLarge()
