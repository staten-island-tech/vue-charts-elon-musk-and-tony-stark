import { Gtfs } from "@transit/gtfs";

const gtfs = new Gtfs('/src/stores/google_transit')

gtfs.forEachStop((stop) => {
    console.log(stop)
})