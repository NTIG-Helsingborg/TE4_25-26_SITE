import { aplMaltaFlat, aplMaltaPlaces } from '../data/aplMalta'
import { AplHostsModal } from './AplHostsModal'

interface Props {
  open: boolean
  onClose: () => void
}

export function AplMaltaModal({ open, onClose }: Props) {
  return (
    <AplHostsModal
      open={open}
      onClose={onClose}
      places={aplMaltaPlaces}
      region={{ sv: 'apl · malta', en: 'apl · malta' }}
      ariaLabel={{ sv: 'APL-värdar i Malta', en: 'APL hosts in Malta' }}
      footer={aplMaltaFlat}
    />
  )
}
