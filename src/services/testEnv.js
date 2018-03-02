import discover from '../utils/APIDiscovery';
import {backendAddr} from '../utils/config';

// export function getEnv() {
//     return discover("envs")
// }

export function getEnv() {console.log(backendAddr.envs)
    return backendAddr.envs
}
