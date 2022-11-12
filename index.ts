import { Schedule, Day, Month, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './datasource';

Schedule.Inject(Day, Month);

let msPerDay: number = 86400000;
let msPerHour: number = 3600000;
let msPerMinue: number = 3600000/60;
let currentTime: number = new Date().setHours(0, 0, 0, 0);
let data: Array<object> = [];

for(var d=1 ; d< 1000 ;d++){ 
    for(var m=1 ; m< 24*60 ;m++){ 
    data.push({
        Id: d*m,
        Subject: 'Name ' + d*m,
        StartTime: new Date(currentTime + msPerDay * -(d ) + msPerMinue * (m  )),
        EndTime: new Date(currentTime + msPerDay * -(d )+ msPerMinue * (m )),
        CategoryColor: '#98AFC7'   
    });
    }
}

let scheduleObj: Schedule = new Schedule({
    width: "100%",
    height: "800px",
    currentView: 'Month',
	views: ['Day', 'Month'],
    eventSettings: { dataSource: data },
    enableAllDayScroll: true,
    rowAutoHeight: true,

	//eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, scheduleObj.currentView)
});
scheduleObj.appendTo('#Schedule');