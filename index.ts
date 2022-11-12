import { Schedule, Day, Month, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './datasource';

Schedule.Inject(Day, Month);

let msPerDay: number = 86400000;
let msPerHour: number = 3600000;
let currentTime: number = new Date().setHours(0, 0, 0, 0);
let data: Array<object> = [];

for(var i=1 ; i< 100000 ;i++){
    data.push({
        Id: i,
        Subject: 'Name ' + i,
        StartTime: new Date(currentTime + msPerDay * -(i / 24) + msPerHour * (i % 24)),
        EndTime: new Date(currentTime + msPerDay * -(i / 24)+ msPerHour * (i % 24)),
        CategoryColor: '#98AFC7'   
    });
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