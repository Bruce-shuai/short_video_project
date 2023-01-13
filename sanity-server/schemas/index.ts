import post from './post';
import comment from './comment';
import user from './user';
import postedBy from './postedBy';

/**
 * 几者关系
 * 
 *      user <---一对一---> post    (通过postedBy建立关系)
 *      user <---一对一---> like    (直接 to User建立关系)
 *      user <---一对一---> comment (通过postedBy建立关系)
 *      post <---一对多---> comment
 *      post <---一对多---> likes
 * 
 *                   |--> comment
 *     user -> post -|--> likes
 * 
 * TODO: 为什么需要有 postedBy 而不直接 to User？
 * 因为在Sanity中为reference提供了专门的组件
 */

export const schemaTypes = [
  post,
  comment,
  user,
  postedBy
]
