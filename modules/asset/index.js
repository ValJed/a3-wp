module.exports = {
  handlers(self) {
    return {
      'apostrophe:modulesRegistered': {
        async insertImages() {
          const number = 100;
          const attachment = await self.apos.attachment.db.findOne({});
          const req = self.apos.task.getReq();

          /* for (const num of Array(number).keys()) { */
          /*   try { */
          /*     const image = { */
          /*       ...self.apos.image.newInstance(), */
          /*       title: `Image ${num}`, */
          /*       slug: `image-${num}`, */
          /*       attachment */
          /*     }; */
          /*     await self.apos.image.insert(req, image); */
          /*   } catch (err) { */
          /*     console.error(err); */
          /*   } */
          /**/
          /* } */
        }
      }
    };
  }
};
