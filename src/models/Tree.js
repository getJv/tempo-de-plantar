import Voluntieer from './Voluntieer'
import Specie from './Specie'
import Location from './Location'

interface Tree {
    voluntieer: Voluntieer,
    species: Specie,
    data: Date,
    planted_number: Number,
    planted_area: Number,
    location: Location,
    local_type: String,
    isSavanna: Boolean
}

 