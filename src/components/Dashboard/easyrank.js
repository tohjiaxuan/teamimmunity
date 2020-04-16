import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'
import firebase from 'firebase';

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
          labels: ['java','js','py'],
          datasets: [{
            label: "No. of hints",
            backgroundColor: [],
            data: []
          }]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            // text: "Look at the number of Java exercises other users have completed"
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
    // fetchItems: function() {
    //   var user = firebase.auth().currentUser;
    //   db.collection('users').doc(user).get().then(snapshot => {
    //     const document = snapshot.data()
    //     document.collection('easy exercises hint').get().then(querySnapShot => {
    //       querySnapShot.forEach(doc => {
    //         this.datacollection.labels.push(doc.data().language)
    //         this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
    //         this.datacollection.datasets[0].data.push(doc.data().hint)
    //       })
    //     })
    //     this.renderChart(this.datacollection, this.options)
    //   })

      fetchItems: function() {
        var user = firebase.auth().currentUser;
        db.collection('users').doc(user.uid).collection('easy exercises hint').get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.data().hint)
            this.datacollection.datasets[0].data.push(doc.data().hint)
          })
          this.renderChart(this.datacollection, this.options)
        })

      // db.collection('users').doc(user).get().then(snapshot => {
      //   const document = snapshot.data()
      //   document.collection('easy exercises hint').get().then(querySnapShot => {
      //     querySnapShot.forEach(doc => {
      //       this.datacollection.labels.push(doc.data().language)
      //       this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
      //       this.datacollection.datasets[0].data.push(doc.data().hint)
      //     })
      //   })
      //   this.renderChart(this.datacollection, this.options)
      // })

      // db.collection('users').collection('easy exercises hint').get().then(querySnapShot => {
      //   querySnapShot.forEach(doc => {
      //     if (user.email == doc.data().email) {
      //       this.datacollection.labels.push(doc.data().language)
      //       this.datacollection.datasets[0].backgroundColor.push(doc.data().color)
      //       this.datacollection.datasets[0].data.push(doc.data().hint)
      //     }
      //   })
      //   this.renderChart(this.datacollection, this.options)
      // })
    }
  },
  created() {
    this.fetchItems()
  }
}