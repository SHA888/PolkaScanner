import { default_endpoint } from "./config.js";

const endpoint = localStorage.getItem("endpoint");
if (!endpoint || typeof endpoint !== "string" || endpoint.indexOf("ws") !== 0) {
  localStorage.setItem("endpoint", default_endpoint);
}

const { ApiPromise, WsProvider } = require("@polkadot/api");
const wsProvider = new WsProvider(localStorage.getItem("endpoint"));
let api = ApiPromise.create({ provider: wsProvider });

// // no blockHash is specified, so we retrieve the latest
// const signedBlock = await api.rpc.chain.getBlock();

// // the information for each of the contained extrinsics
// signedBlock.block.extrinsics.forEach((ex, index) => {
//   // the extrinsics are decoded by the API, human-like view
//   console.log(index, ex.toHuman());

//   const { isSigned, meta, method: { args, method, section } } = ex;

//   // explicit display of name, args & documentation
//   console.log(`${section}.${method}(${args.map((a) => a.toString()).join(', ')})`);
//   console.log(meta.documentation.map((d) => d.toString()).join('\n'));

//   // signer/nonce info
//   if (isSigned) {
//     console.log(`signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`);
//   }
// });

// // no blockHash is specified, so we retrieve the latest
// const signedBlock = await api.rpc.chain.getBlock();
// const allRecords = await api.query.system.events.at(signedBlock.block.header.hash);

// // map between the extrinsics and events
// signedBlock.block.extrinsics.forEach(({ method: { method, section } }, index) => {
//   // filter the specific events based on the phase and then the
//   // index of our extrinsic in the block
//   const events = allRecords
//     .filter(({ phase }) =>
//       phase.isApplyExtrinsic &&
//       phase.asApplyExtrinsic.eq(index)
//     )
//     .map(({ event }) => `${event.section}.${event.method}`);

//   console.log(`${section}.${method}:: ${events.join(', ') || 'no events'}`);
// });

// const util = require("@polkadot/util");
export default api;
