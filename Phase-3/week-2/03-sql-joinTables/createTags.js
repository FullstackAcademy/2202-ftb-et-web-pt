// INSERT INTO post_tags("postId", "tagId")
// VALUES (7, 3)
// ON CONFLICT ("postId", "tagId") DO NOTHING;

/**
 * postId | tagId 
 * ---------------
 * 7      |  3
 * 1      |  2
 * -Associate 7 w/ 3 
 * 
 */



async function createPostTag(postId, tagId) {
    try {
      await client.query(`
        INSERT INTO post_tags("postId", "tagId")
        VALUES ($1, $2)
        ON CONFLICT ("postId", "tagId") DO NOTHING;
      `, [postId, tagId]);
    } catch (error) {
      throw error;
    }
  }

async function addTagsToPost(postId, tagList) {
    try {
// return value of an async function ---> Promise
      
//2 --->createPostTag(1, 2) --> Promise
//5 --->createPostTag(1, 5) --> Promise
//10 --->createPostTag(1, 10) --> Promise

// [Promise, Promise, Promise]
const createPostTagPromises = tagList.map(
        tag => createPostTag(postId, tag.id)
      );
  
    //   Will wait until all promises are resolved 
    // and then move on
      await Promise.all(createPostTagPromises);
  
      return await getPostById(postId);
    } catch (error) {
      throw error;
    }
  }

  addTagsToPost(1, [2,5,10])

