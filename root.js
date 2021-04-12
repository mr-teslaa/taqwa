// load the ecmascript when all content is loaded
document.addEventListener('DOMContentLoaded', () => {

    //initialize the date. give the starting date of ramadan
    let countDate = new Date('April 14, 2021 00:00:00:00').getTime()

        // after getting the deadline of ramadan, we need to get the time what goes right now.
        ramadan = () => {
            let now = new Date().getTime();
            gap = countDate - now;

            let second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            // calculate the time
            let d = Math.floor( gap/(day) ),
                h = Math.floor( (gap%(day)) / (hour) ),
                m = Math.floor( (gap%(hour)) / (minute)),
                s = Math.floor( (gap%(minute)) / second );

            // inject the value in DOM
            document.querySelector('#day').innerHTML = d;
            document.querySelector('#hour').innerHTML = h;
            document.querySelector('#minute').innerHTML = m;
            document.querySelector('#second').innerHTML = s;
        }

        // add a zero when the timer is below 10
        /*addZero = (n) => {
            return (parseInt(n, 10) < 10 ? '0' : '') + n;
        }*/

        // all this function everysecond, basically counting the seconds
        setInterval(() => { ramadan(); }, 1000);

        document.querySelector('#openpopup').addEventListener('click', () => {
            document.querySelector('.popup').classList.add('active');
        })

        document.querySelector('#closepopup').addEventListener('click', () => {
            //blur.classList.remove('blur');
            document.querySelector('.popup').classList.remove('active');
        })
})