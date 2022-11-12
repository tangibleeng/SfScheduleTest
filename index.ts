import { Schedule, Day, Month, EventRenderedArgs } from '@syncfusion/ej2-schedule';
import { applyCategoryColor } from './datasource';

Schedule.Inject(Day, Month);

let msPerHour: number = 3600000;
let currentTime: number = new Date().setHours(0, 0, 0, 0);
let data: Array<object> = [];

for(var i=1 ; i< 100 ;i++){ 

    data.push({
        Id: i,
        Subject: 'Name ' + i,
        StartTime: new Date(currentTime + msPerHour * i),
        EndTime: new Date(currentTime +   msPerHour * i + 1),
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