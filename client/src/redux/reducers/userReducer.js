import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    profile: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
        return { ...state, isSignedIn: true, profile: {
            userId: action.payload.Eea,
            fullName: action.payload.ig,
            firstName: action.payload.ofa,
            lastName: action.payload.wea,
            image: action.payload.Paa,
            email: action.payload.U3,
            
        }
        };
        case SIGN_OUT:
            return{ ...state, isSignedIn: false, profile: null };
        default:
            return state;
    }
};

// Eea(pin): "102762067882888268287"
// ig(pin): "Ian Dowdy"
// ofa(pin): "Ian"
// wea(pin): "Dowdy"
// Paa(pin): "https://lh4.googleusercontent.com/-iin3vwt4Szs/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZEbcWvE7QVI47a9VqcxAVpDV05AA/s96-c/photo.jpg"
// U3(pin): "ian_dowdy@outlook.com"