import {OptionFragment} from "../option-fragment"

class UtilStretchedLink extends OptionFragment{
  constructor(){
    super()
    this.schema = {
      label:'Stretched Link',
      widget:'OpSwitch',
      group:'utilities',
      onValue:'stretched-link',
      offValue:'',
      defaultValue:'',
    }

    this.metaFragment = '' 

    this.fieldName = 'utilStretchedLink'
  }

  copyMeta(from, to){
    to.utilStretchedLink = from.utilStretchedLink
  }

  toViewModel(model, meta){
    let metaFragment = meta[this.fieldName]
    model.classList.add(metaFragment)
  }
}

var addonUtilStretchedLink = (node)=>{
  let utilStretchedLink = new UtilStretchedLink
  utilStretchedLink.addon(node)
  return utilStretchedLink
}

export {addonUtilStretchedLink}
