import React, { useState, useEffect } from "react"
import './FaceARApp.css'
// import DeepAR from './deepar.js'

function FaceARApp() {

    // const [wininnerHeight, setWininnerHeight] = useState(window.innerHeight)
    // const [wininnerWidth, setWininnerWidth] = useState(window.innerWidth)



    // useEffect(() => {


    //     if (window.innerWidth > window.innerHeight) {
    //         setWininnerWidth(Math.floor(wininnerHeight * 0.66))
    //     }

    //     var deepARProps = DeepAR({
    //         canvasWidth: wininnerWidth,
    //         canvasHeight: wininnerHeight,
    //         licenseKey: 'db14647a8bd09a27e5f8dbe235a84d928bb57e51ad05f6b8031d98e33010b748231f384a2c984101',
    //         canvas: document.getElementById('deepar-canvas'),
    //         numberOfFaces: 1,
    //         libPath: './lib',
    //         segmentationInfoZip: 'segmentation.zip',
    //         onInitialize: function () {
    //             // start video immediately after the initalization, mirror = true
    //             deepARProps.startVideo(true)

    //             // or we can setup the video element externally and call deepAR.setVideoElement (see startExternalVideo function below)

    //             deepARProps.switchEffect(0, 'slot', './effects/background_segmentation', function () {
    //                 // effect loaded
    //             })
    //         }
    //     })
    //     deepARProps.onCameraPermissionAsked = function () {
    //         console.log('camera permission asked')
    //     }

    //     deepARProps.onCameraPermissionGranted = function () {
    //         console.log('camera permission granted')
    //     }

    //     deepARProps.onCameraPermissionDenied = function () {
    //         console.log('camera permission denied')
    //     }

    //     deepARProps.onScreenshotTaken = function (photo) {
    //         console.log('screenshot taken')
    //         var a = document.createElement("a") //Create <a>
    //         a.href = photo //Image Base64 Goes here
    //         a.download = "Image.png" //File name Here
    //         a.click() //Downloaded file
    //     }

    //     deepARProps.onImageVisibilityChanged = function (visible) {
    //         console.log('image visible', visible)
    //     }

    //     deepARProps.onFaceVisibilityChanged = function (visible) {
    //         console.log('face visible', visible)
    //     }

    //     deepARProps.onVideoStarted = function () {
    //         var loaderWrapper = document.getElementById('loader-wrapper')
    //         loaderWrapper.style.display = 'none'
    //     }

    //     deepARProps.downloadFaceTrackingModel('lib/models-68-extreme.bin')
    //     function startExternalVideo() {

    //         // create video element
    //         var video = document.createElement('video')
    //         video.muted = true
    //         video.loop = true
    //         video.controls = true
    //         video.setAttribute('playsinline', 'playsinline')
    //         video.style.width = '100%'
    //         video.style.height = '100%'

    //         // put it somewhere in the DOM
    //         var videoContainer = document.createElement('div')
    //         videoContainer.appendChild(video)
    //         videoContainer.style.width = '1px'
    //         videoContainer.style.height = '1px'
    //         videoContainer.style.position = 'absolute'
    //         videoContainer.style.top = '0px'
    //         videoContainer.style.left = '0px'
    //         videoContainer.style['z-index'] = '-1'
    //         document.body.appendChild(videoContainer)

    //         navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    //             try {
    //                 video.srcObject = stream
    //             } catch (error) {
    //                 video.src = URL.createObjectURL(stream)
    //             }

    //             setTimeout(function () {
    //                 video.play()
    //             }, 50)
    //         }).catch(function (error) {

    //         })

    //         // tell the DeepAR SDK about our new video element
    //         deepARProps.setVideoElement(video, true)
    //     }


    //     // Position the carousel to cover the canvas
    //     if (window.innerWidth > window.innerHeight) {
    //         var width = Math.floor(window.innerHeight * 0.66)
    //         var carousel = document.getElementsByClassName('effect-carousel')[0]
    //         carousel.style.width = width + 'px'
    //         carousel.style.marginLeft = (window.innerWidth - width) / 2 + "px"
    //     }

    //     document.getElementById("myBtn").addEventListener("click", function () {
    //         console.log(deepARProps.takeScreenshot())
    //     })


    //     if (carousel != null)
    //         (
    //             carousel.slick({
    //                 slidesToShow: 1,
    //                 centerMode: true,
    //                 focusOnSelect: true,
    //                 arrows: false,
    //                 accessibility: false,
    //                 variableWidth: true
    //             }))

    //     var effects = [
    //         './effects/background_segmentation',
    //         './effects/aviators',
    //         './effects/beard',
    //         './effects/dalmatian',
    //         './effects/flowers',
    //         './effects/koala',
    //         './effects/lion',
    //         './effects/teddycigar'
    //     ]

    //     if (carousel != null)
    //         (carousel.on('afterChange', function (event, slick, currentSlide) {
    //             deepARProps.switchEffect(0, 'slot', effects[currentSlide])
    //         }))
    // }, [])





    return (
        <div className="Home">
            <button id="myBtn" class="testing">Try it</button>
            <br />
            
            <canvas class="deepar" id="deepar-canvas" oncontextmenu="event.preventDefault()"></canvas>
            <div id="loader-wrapper">
                <span class="loader"></span>
            </div>
            <div class="effect-carousel">
                <div><img class="thumb" src="thumbs/galaxy.png" /></div>
                <div><img class="thumb" src="thumbs/aviators.png" /></div>
                <div><img class="thumb" src="thumbs/beard.png" /></div>
                <div><img class="thumb" src="thumbs/dalmatian.png" /></div>
                <div><img class="thumb" src="thumbs/flowers.png" /></div>
                <div><img class="thumb" src="thumbs/koala.png" /></div>
                <div><img class="thumb" src="thumbs/lion.png" /></div>
                <div><img class="thumb" src="thumbs/teddy_cigar.png" /></div>
            </div>
        </div>
    )
}

export default FaceARApp