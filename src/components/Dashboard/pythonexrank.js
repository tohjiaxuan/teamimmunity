import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        // datacollection: {
        //     datasets: []
        // },
        datacollection: {
          labels: [],
          datasets: [{
            label: "Completed",
            backgroundColor: [],
            data: []
          }]
        },
        // options: {
        //   legend: { display: true},
        //   title: {
        //     display: true,
        //     // text: "Look at other users' interest level in the languages"
        //   }, 
        //   scales: {
        //     yAxes: [{ 
        //       scaleLabel: {
        //         display: true,
        //         labelString: "Number of completed exercises"
        //       }
        //     }],
        //     xAxes: [{ 
        //       scaleLabel: {
        //         display: true,
        //         labelString: "Type of Exercise"
        //       }
        //     }]
        //   },
        //     responsive: true,
        //     maintainAspectRatio: false
        // }
        options: {
          legend: { display: false },
          title: {
            display: true,
            // text: "Look at the number of Python exercises other users have completed"
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }],
            xAxes: [{

            }]
          },
          responsive: true,
          maintainAspectRatio: false
        }
    }
  },
  methods: {
    // fetchItems: function () {
    //   db.collection('language activity').get().then(querySnapShot => {
    //     querySnapShot.forEach(doc => {
    //         var newDataset = {
    //             label: doc.data().language,
    //             backgroundColor: doc.data().color,
    //             data: []
    //         }
    //         newDataset.data.push(doc.data().clicks)
    //         this.datacollection.datasets.push(newDataset)
    //     })
    //     this.renderChart(this.datacollection, this.options)
    //   })
    // }
    fetchItems: function() {
      db.collection('python exercises activity').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.datacollection.labels.push(doc.data().type)
          this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
          this.datacollection.datasets[0].data.push(doc.data().clicks)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created() {
    this.fetchItems()
  }
}