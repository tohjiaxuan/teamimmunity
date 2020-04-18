import { HorizontalBar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
  extends: HorizontalBar,
  data: function () {
    return {
        // datacollection: {
        //     datasets: []
        // },
        datacollection: {
          labels: [],
          datasets: [{
            label: "Clicks",
            backgroundColor: [],
            data: []
          }]
        },
        
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: "Look at other users' interest level in the languages"
          },
          scales: {
            yAxes: [{
              stacked: false,
              ticks: {
                beginAtZero:true
              }
            }],
            xAxes: [{
              stacked: true
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
      db.collection('language activity').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.datacollection.labels.push(doc.data().language)
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