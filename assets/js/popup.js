const text = document.getElementById( 'notify-text' );
const notify = document.getElementById( 'notify-button' );
const reset = document.getElementById( 'notify-reset' );
const counter = document.getElementById( 'notify-count' );

chrome.storage.local.get( ['notifyCount'], data => {
	let value = data.notifyCount || 0;
	counter.innerHTML = value;
} );

chrome.storage.onChanged.addListener( ( changes, namespace ) => {
	if ( changes.notifyCount ) {
		let value = changes.notifyCount.newValue || 0;
		counter.innerHTML = value;
	}
});

reset.addEventListener( 'click', () => {
	chrome.storage.local.clear();
	text.value = '';
} );

notify.addEventListener( 'click', () => {
	chrome.runtime.sendMessage( '', {
		type: 'notification',
		message: text.value
	});
} );

// let flightsThatAreIn = document.getElementsByClassName("_2Hlwf3wYFGRM0I_xFodhNp _17BWc-TdIq3Hsx3wjE3lw6 _26ULLRwOqrFwdQUoFGDEP4 _1QZeLwax7Um-pPGe2xRTV3");
// function getFlightsIn() {
//     for (i = 0; i < flightsThatAreIn.length; i++) {
//         console.log(flightsThatAreIn[i].innerHTML)
//     }
// }


let lateArrivalTime = document.getElementsByClassName("turn-schedule__flight-time-estimated late");
let scheduledArrivalTime = document.getElementsByClassName("turn-schedule__flight-time-scheduled late");
let flightData = document.querySelector('.turn-schedule__flight-number');
// let prevSiblings = flightData.previousElementSibling;
function getLateFlights() {
    for (i = 0; i < lateArrivalTime.length; i++) {
        // console.log(`This flight is LATE: FLT#` ${})
        console.log(`Late Arrival Time ${lateArrivalTime[i].innerHTML} is late`);
        // console.log(prevSiblings)
        console.log(`Original Scheduled Arrival Time: ${scheduledArrivalTime[i].innerHTML}`);
        
        // Do math here to detect how many minutes late it is.
    }
}

// Run Connection Flight search function
getLateFlights()

