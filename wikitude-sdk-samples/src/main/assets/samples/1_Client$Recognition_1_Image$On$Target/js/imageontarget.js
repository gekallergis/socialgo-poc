var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function worldLoaded() is called.

			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.
		*/
		this.tracker = new AR.ClientTracker("assets/magazine.wtc", {
			onLoaded: this.worldLoaded
		});

		/*
			The next step is to create the augmentation. In this example an image resource is created and passed to the AR.ImageDrawable. A drawable is a visual component that can be connected to an IR target (AR.Trackable2DObject) or a geolocated object (AR.GeoObject). The AR.ImageDrawable is initialized by the image and its size. Optional parameters allow for position it relative to the recognized target.
		*/


        var video = new AR.VideoDrawable("assets/itsmylife.mp4", 1, {
        			offsetY: 0,
        		});


/*
            Adding the video to the image target is straight forward and similar like adding any other drawable to an image target.

            Note that this time we use "*" as target name. That means that the AR.Trackable2DObject will respond to any target that is defined in the target collection. You can use wildcards to specify more complex name matchings. E.g. 'target_?' to reference 'target_1' through 'target_9' or 'target*' for any targets names that start with 'target'.

            To start the video immediately after the target is recognized we call play inside the onEnterFieldOfVision trigger. Supplying -1 to play tells the Wikitude SDK to loop the video infinitely. Choose any positive number to re-play it multiple times.
        */

        var pageOne = new AR.Trackable2DObject(this.tracker, "itsmylife", {
            drawables: {
                cam: [video]
            },
            onEnterFieldOfVision: function onEnterFieldOfVisionFn() {
                video.play(-1);
            },
            onExitFieldOfVision: function onExitFieldOfVisionFn() {
                video.stop();
            }
        });


		/* Create overlay for page one */
		var imgOne = new AR.ImageResource("assets/drums1.png");
		var overlayOne = new AR.ImageDrawable(imgOne, 0.5, {
			offsetX: -0.15,
			offsetY: 0
		});

		/*
			The last line combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target and the drawable that should augment the recognized image.
			Please note that in this case the target name is a wildcard. Wildcards can be used to respond to any target defined in the target collection. If you want to respond to a certain target only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
		*/
		var haveaniceday = new AR.Trackable2DObject(this.tracker, "Bon-Jovi-Have-A-Nice-Day", {
			drawables: {
				cam: overlayOne
			}
		});

		var imgTwo = new AR.ImageResource("assets/micro1.png");
        var overlayTwo = new AR.ImageDrawable(imgTwo, 0.5, {
            offsetX: -0.15,
            offsetY: 0
        });


        /*    The last line combines everything by creating an AR.Trackable2DObject with the previously created tracker, the name of the image target and the drawable that should augment the recognized image.
            Please note that in this case the target name is a wildcard. Wildcards can be used to respond to any target defined in the target collection. If you want to respond to a certain target only for a particular AR.Trackable2DObject simply provide the target name as specified in the target collection.
        */
        var whichSong = new AR.Trackable2DObject(this.tracker, "bon-jovi-performing", {
            drawables: {
                cam: overlayTwo
            }
        });


	},


};

World.init();
