'use client'

import * as React from "react";
import {useSpring, animated, config} from 'react-spring';
const SvgComponent = (props) => {
 
const [{v,w,x,y,z}] = useSpring(()=>({
  from: {
  v: "M0 163L75 163L75 91L150 91L150 301L225 301L225 91L300 91L300 199L375 199L375 85L450 85L450 193L525 193L525 235L600 235L600 241L675 241L675 235L750 235L750 373L825 373L825 79L900 79L900 127L900 0L900 0L825 0L825 0L750 0L750 0L675 0L675 0L600 0L600 0L525 0L525 0L450 0L450 0L375 0L375 0L300 0L300 0L225 0L225 0L150 0L150 0L75 0L75 0L0 0Z",
  w: "M0 235L75 235L75 217L150 217L150 445L225 445L225 211L300 211L300 253L375 253L375 133L450 133L450 223L525 223L525 319L600 319L600 379L675 379L675 355L750 355L750 475L825 475L825 115L900 115L900 169L900 125L900 77L825 77L825 371L750 371L750 233L675 233L675 239L600 239L600 233L525 233L525 191L450 191L450 83L375 83L375 197L300 197L300 89L225 89L225 299L150 299L150 89L75 89L75 161L0 161Z",
  x: "M0 403L75 403L75 409L150 409L150 505L225 505L225 529L300 529L300 475L375 475L375 451L450 451L450 427L525 427L525 457L600 457L600 451L675 451L675 487L750 487L750 535L825 535L825 355L900 355L900 367L900 167L900 113L825 113L825 473L750 473L750 353L675 353L675 377L600 377L600 317L525 317L525 221L450 221L450 131L375 131L375 251L300 251L300 209L225 209L225 443L150 443L150 215L75 215L75 233L0 233Z",
  y: "M0 493L75 493L75 505L150 505L150 565L225 565L225 571L300 571L300 517L375 517L375 559L450 559L450 535L525 535L525 571L600 571L600 541L675 541L675 553L750 553L750 553L825 553L825 427L900 427L900 481L900 365L900 353L825 353L825 533L750 533L750 485L675 485L675 449L600 449L600 455L525 455L525 425L450 425L450 449L375 449L375 473L300 473L300 527L225 527L225 503L150 503L150 407L75 407L75 401L0 401Z",
  z: "M0 601L75 601L75 601L150 601L150 601L225 601L225 601L300 601L300 601L375 601L375 601L450 601L450 601L525 601L525 601L600 601L600 601L675 601L675 601L750 601L750 601L825 601L825 601L900 601L900 601L900 479L900 425L825 425L825 551L750 551L750 551L675 551L675 539L600 539L600 569L525 569L525 533L450 533L450 557L375 557L375 515L300 515L300 569L225 569L225 563L150 563L150 503L75 503L75 491L0 491Z",
},
  to: [{
  v: "M0 103L75 103L75 79L150 79L150 103L225 103L225 157L300 157L300 109L375 109L375 139L450 139L450 169L525 169L525 31L600 31L600 133L675 133L675 163L750 163L750 91L825 91L825 67L900 67L900 145L900 0L900 0L825 0L825 0L750 0L750 0L675 0L675 0L600 0L600 0L525 0L525 0L450 0L450 0L375 0L375 0L300 0L300 0L225 0L225 0L150 0L150 0L75 0L75 0L0 0Z",
  w: "M0 319L75 319L75 199L150 199L150 181L225 181L225 313L300 313L300 385L375 385L375 361L450 361L450 403L525 403L525 109L600 109L600 229L675 229L675 367L750 367L750 349L825 349L825 253L900 253L900 307L900 143L900 65L825 65L825 89L750 89L750 161L675 161L675 131L600 131L600 29L525 29L525 167L450 167L450 137L375 137L375 107L300 107L300 155L225 155L225 101L150 101L150 77L75 77L75 101L0 101Z",
  x: "M0 367L75 367L75 325L150 325L150 247L225 247L225 379L300 379L300 463L375 463L375 493L450 493L450 463L525 463L525 187L600 187L600 355L675 355L675 523L750 523L750 457L825 457L825 385L900 385L900 409L900 305L900 251L825 251L825 347L750 347L750 365L675 365L675 227L600 227L600 107L525 107L525 401L450 401L450 359L375 359L375 383L300 383L300 311L225 311L225 179L150 179L150 197L75 197L75 317L0 317Z",
  y: "M0 565L75 565L75 499L150 499L150 529L225 529L225 493L300 493L300 529L375 529L375 547L450 547L450 535L525 535L525 523L600 523L600 535L675 535L675 577L750 577L750 511L825 511L825 493L900 493L900 499L900 407L900 383L825 383L825 455L750 455L750 521L675 521L675 353L600 353L600 185L525 185L525 461L450 461L450 491L375 491L375 461L300 461L300 377L225 377L225 245L150 245L150 323L75 323L75 365L0 365Z", 
  z: "M0 601L75 601L75 601L150 601L150 601L225 601L225 601L300 601L300 601L375 601L375 601L450 601L450 601L525 601L525 601L600 601L600 601L675 601L675 601L750 601L750 601L825 601L825 601L900 601L900 601L900 497L900 491L825 491L825 509L750 509L750 575L675 575L675 533L600 533L600 521L525 521L525 533L450 533L450 545L375 545L375 527L300 527L300 491L225 491L225 527L150 527L150 497L75 497L75 563L0 563Z",
  },
  {
  v: "M0 97L75 97L75 37L150 37L150 55L225 55L225 121L300 121L300 85L375 85L375 79L450 79L450 31L525 31L525 43L600 43L600 61L675 61L675 91L750 91L750 67L825 67L825 67L900 67L900 37L900 0L900 0L825 0L825 0L750 0L750 0L675 0L675 0L600 0L600 0L525 0L525 0L450 0L450 0L375 0L375 0L300 0L300 0L225 0L225 0L150 0L150 0L75 0L75 0L0 0Z",
  w: "M0 193L75 193L75 199L150 199L150 181L225 181L225 271L300 271L300 229L375 229L375 199L450 199L450 61L525 61L525 85L600 85L600 205L675 205L675 115L750 115L750 211L825 211L825 103L900 103L900 133L900 35L900 65L825 65L825 65L750 65L750 89L675 89L675 59L600 59L600 41L525 41L525 29L450 29L450 77L375 77L375 83L300 83L300 119L225 119L225 53L150 53L150 35L75 35L75 95L0 95Z",
  x: "M0 319L75 319L75 397L150 397L150 295L225 295L225 445L300 445L300 361L375 361L375 331L450 331L450 301L525 301L525 145L600 145L600 271L675 271L675 217L750 217L750 265L825 265L825 427L900 427L900 391L900 131L900 101L825 101L825 209L750 209L750 113L675 113L675 203L600 203L600 83L525 83L525 59L450 59L450 197L375 197L375 227L300 227L300 269L225 269L225 179L150 179L150 197L75 197L75 191L0 191Z",
  y: "M0 571L75 571L75 523L150 523L150 511L225 511L225 565L300 565L300 517L375 517L375 493L450 493L450 451L525 451L525 481L600 481L600 487L675 487L675 475L750 475L750 475L825 475L825 511L900 511L900 481L900 389L900 425L825 425L825 263L750 263L750 215L675 215L675 269L600 269L600 143L525 143L525 299L450 299L450 329L375 329L375 359L300 359L300 443L225 443L225 293L150 293L150 395L75 395L75 317L0 317Z",
  z: "M0 601L75 601L75 601L150 601L150 601L225 601L225 601L300 601L300 601L375 601L375 601L450 601L450 601L525 601L525 601L600 601L600 601L675 601L675 601L750 601L750 601L825 601L825 601L900 601L900 601L900 479L900 509L825 509L825 473L750 473L750 473L675 473L675 485L600 485L600 479L525 479L525 449L450 449L450 491L375 491L375 515L300 515L300 563L225 563L225 509L150 509L150 521L75 521L75 569L0 569Z",
  },
  {
    v: "M0 163L75 163L75 91L150 91L150 301L225 301L225 91L300 91L300 199L375 199L375 85L450 85L450 193L525 193L525 235L600 235L600 241L675 241L675 235L750 235L750 373L825 373L825 79L900 79L900 127L900 0L900 0L825 0L825 0L750 0L750 0L675 0L675 0L600 0L600 0L525 0L525 0L450 0L450 0L375 0L375 0L300 0L300 0L225 0L225 0L150 0L150 0L75 0L75 0L0 0Z",
    w: "M0 235L75 235L75 217L150 217L150 445L225 445L225 211L300 211L300 253L375 253L375 133L450 133L450 223L525 223L525 319L600 319L600 379L675 379L675 355L750 355L750 475L825 475L825 115L900 115L900 169L900 125L900 77L825 77L825 371L750 371L750 233L675 233L675 239L600 239L600 233L525 233L525 191L450 191L450 83L375 83L375 197L300 197L300 89L225 89L225 299L150 299L150 89L75 89L75 161L0 161Z",
    x: "M0 403L75 403L75 409L150 409L150 505L225 505L225 529L300 529L300 475L375 475L375 451L450 451L450 427L525 427L525 457L600 457L600 451L675 451L675 487L750 487L750 535L825 535L825 355L900 355L900 367L900 167L900 113L825 113L825 473L750 473L750 353L675 353L675 377L600 377L600 317L525 317L525 221L450 221L450 131L375 131L375 251L300 251L300 209L225 209L225 443L150 443L150 215L75 215L75 233L0 233Z",
    y: "M0 493L75 493L75 505L150 505L150 565L225 565L225 571L300 571L300 517L375 517L375 559L450 559L450 535L525 535L525 571L600 571L600 541L675 541L675 553L750 553L750 553L825 553L825 427L900 427L900 481L900 365L900 353L825 353L825 533L750 533L750 485L675 485L675 449L600 449L600 455L525 455L525 425L450 425L450 449L375 449L375 473L300 473L300 527L225 527L225 503L150 503L150 407L75 407L75 401L0 401Z",
    z: "M0 601L75 601L75 601L150 601L150 601L225 601L225 601L300 601L300 601L375 601L375 601L450 601L450 601L525 601L525 601L600 601L600 601L675 601L675 601L750 601L750 601L825 601L825 601L900 601L900 601L900 479L900 425L825 425L825 551L750 551L750 551L675 551L675 539L600 539L600 569L525 569L525 533L450 533L450 557L375 557L375 515L300 515L300 569L225 569L225 563L150 563L150 503L75 503L75 491L0 491Z",
  },
],
  config: config.molasses,
  loop: true,
  
}), [])
  return(
  <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 900 600" width="100%" height="100%" {...props}>
  <animated.path d={v} fill="#6db4ef" className="h-screen w-screen"/>
  <animated.path d={w} fill="#579cd8"/>
  <animated.path d={x} fill="#4184c2"/>
  <animated.path d={y} fill="#296dab"/>
  <animated.path d={z} fill="#095695"/>
  </svg>
  )
  }
export default SvgComponent
