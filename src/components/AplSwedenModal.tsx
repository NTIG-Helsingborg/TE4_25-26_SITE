import { aplSwedenPlaces } from '../data/aplSweden'
import { AplHostsModal } from './AplHostsModal'

interface Props {
  open: boolean
  onClose: () => void
}

export function AplSwedenModal({ open, onClose }: Props) {
  return (
    <AplHostsModal
      open={open}
      onClose={onClose}
      places={aplSwedenPlaces}
      region={{ sv: 'apl · sverige', en: 'apl · sweden' }}
      ariaLabel={{ sv: 'APL-värdar i Sverige', en: 'APL hosts in Sweden' }}
      contactLabel={{ sv: 'Kontakt', en: 'Contact' }}
    />
  )
}
