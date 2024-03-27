import { stops } from './google_transit/stops'
import { getPosition } from '@/stores/store'

const findNearestCoords = async function () {
  const position = await getPosition({
    enableHighAccuracy: true
  })
  console.log(position)
  const coords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  }
}

const calcDistance = function(pointOne,pointTwo) {
    let differenceX = Math.abs(pointOne.latitude - pointTwo.latitude)
    let differenceY = Math.abs(pointOne.longitude - pointTwo.longitude)
    let distanceBetween = Math.sqrt(differenceX^2 + differenceY^2)
    return distanceBetween
}
