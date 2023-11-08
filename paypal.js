
const getPaymentConfirmationStatus = (timestamps_1, payments_1, timelimit_1) => {

    // use hash map to track each transaction between sender and reciever.

    let transacMap = new Map()
    let ans = []
    for(let i = 0; i < payments_1.length; i++){
      //console.log('payments at i -->',payments_1[i])

      const senderId = payments_1[i][0]

      const receiverID = payments_1[i][1]

      const key = senderId + "-" + receiverID;

      let lastPaymentTime = transacMap.get(key)

      const currentTime = timestamps_1[i]

      if(currentTime - lastPaymentTime < timelimit_1){

        ans.push("true") // marking it as suspicious
      }
      else
       ans.push("false")

      transacMap.set(key,timestamps_1[i])
      // console.log(ts.get(payments_1))

    }
   // console.log(transacMap)
    console.log(ans)
    return ans
}


const timestamps_1 = [1, 4, 5, 10, 11, 14]
const payments_1 = [[1, 2], [25, 65], [25, 65], [1, 2], [25,65], [1, 2]]
const timelimit_1 = 5

const timestamps_2 = [1, 1, 1, 11, 13, 14]
const payments_2 =  [[1,2], [1,2], [25,35], [1,2], [11, 1], [1, 11]]
const timelimit_2 = 5

const timestamps_3 = [1]
const payments_3 = [[1,2]]
const timelimit_3 = 5

const timestamps_4 = [23,23,52,52,180,180]
const payments_4 = [[50,51],[55,90],[50,51],[55,90],[14,94],[50,51]]
const timelimit_4 = 55

const timestamps_5 = [1,2,5,10]
const payments_5 = [[3,4],[3,4],[3,4],[3,4]]
const timelimit_5 = 5

const timestamps_6 = [1, 2, 4, 6, 11, 12]
const payments_6 = [[1, 2], [41, 5], [41, 6], [41, 6], [41, 6], [4, 16]]
const timelimit_6 = 5

const timestamps_7 = [1, 4, 8, 13];
const payments_7 = [[1, 2],[1, 2],[1, 2],[1, 2]];
const timelimit_7 = 5;

  getPaymentConfirmationStatus(timestamps_1, payments_1, timelimit_1)
  getPaymentConfirmationStatus(timestamps_2, payments_2, timelimit_2)
  getPaymentConfirmationStatus(timestamps_3, payments_3, timelimit_3)
  getPaymentConfirmationStatus(timestamps_4, payments_4, timelimit_4)
  getPaymentConfirmationStatus(timestamps_5, payments_5, timelimit_5)
  getPaymentConfirmationStatus(timestamps_6, payments_6, timelimit_6)
  getPaymentConfirmationStatus(timestamps_7, payments_7, timelimit_7)