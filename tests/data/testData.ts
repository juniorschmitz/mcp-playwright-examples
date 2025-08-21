export const testData = {
  users: {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    lockedOutUser: {
      username: 'locked_out_user',
      password: 'secret_sauce'
    },
    problemUser: {
      username: 'problem_user',
      password: 'secret_sauce'
    },
    performanceGlitchUser: {
      username: 'performance_glitch_user',
      password: 'secret_sauce'
    }
  },
  
  products: {
    fleeceJacket: {
      name: 'Sauce Labs Fleece Jacket',
      price: '49.99',
      description: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.'
    },
    backpack: {
      name: 'Sauce Labs Backpack',
      price: '29.99',
      description: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
    }
  },

  checkoutInfo: {
    validUser: {
      firstName: 'João',
      lastName: 'Silva',
      postalCode: '12345'
    },
    anotherValidUser: {
      firstName: 'Maria',
      lastName: 'Santos',
      postalCode: '54321'
    }
  },

  urls: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    inventory: 'https://www.saucedemo.com/v1/inventory.html',
    cart: 'https://www.saucedemo.com/v1/cart.html',
    checkoutStepOne: 'https://www.saucedemo.com/v1/checkout-step-one.html',
    checkoutStepTwo: 'https://www.saucedemo.com/v1/checkout-step-two.html',
    checkoutComplete: 'https://www.saucedemo.com/v1/checkout-complete.html'
  }
};
