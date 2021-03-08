
// Menu Toggle Script
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });


    // ApexCharts js start

    var options = {
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      // title: {
      //   text: 'Product Trends by Month',
      //   align: 'left'
      // },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#chart"),
      options
    );

    chart.render();

   // ApexCharts js end



   // ApexCharts radar  start

   var options = {
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            }],
            // title: {
            //     text: 'Radar Chart - Multi Series'
            // },
            stroke: {
                width: 0
            },
            fill: {
                opacity: 0.4
            },
            markers: {
                size: 0
            },
            labels: ['2011', '2012', '2013', '2014', '2015', '2016']
        }

        var chart = new ApexCharts(
            document.querySelector("#radarChart "),
            options
        );

        chart.render();

        function update() {

            function randomSeries() {
                var arr = []
                for(var i = 0; i < 6; i++) {
                    arr.push(Math.floor(Math.random() * 100)) 
                }

                return arr
            }
            

            chart.updateSeries([{
                name: 'Series 1',
                data: randomSeries(),
            }, {
                name: 'Series 2',
                data: randomSeries(),
            }, {
                name: 'Series 3',
                data: randomSeries(),
            }])
        }
       // // ApexCharts radar  end



   // data table start

  
    var dataSet = [
    ["Mo Tahir", "M-1", "XYZ", "Indore"],
    ["Wasim Jaffer", "M-2", "XYZ", "Indore"],
    ["Mo Farhan", "M-3", "XYZ", "Indore"],
    ["Mo Azahar", "M-4", "XYZ", "Mhow"],
   
    
  ];

  var columnDefs = [{
    title: "Name"
  }, {
    title: "ID"
  }, {
    title: "Position"
  }, {
    title: "Address"
  }];

  var myTable;

  myTable = $('#userTable').DataTable({
    "sPaginationType": "full_numbers",
    data: dataSet,
    columns: columnDefs,
    dom: 'Bfrtip',        // Needs button container
          select: 'single',
          responsive: true,
          altEditor: true,     // Enable altEditor
          buttons: [{
            text: 'Add',
            name: 'add'
                  // do not change name
          },
          {
            extend: 'selected', // Bind to Selected row
            text: 'Edit',
            name: 'edit'        // do not change name
          },
          {
            extend: 'selected', // Bind to Selected row
            text: 'Delete',
            name: 'delete'      // do not change name
         }]
  });


   // data table end