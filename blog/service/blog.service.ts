import {gql, request} from "graphql-request";
import {IBlog} from "@/types";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
    	query MyQuery {
  			blogs {
  			  title
  			  createdAt
  			  author {
  			    name
  			    image {
  			      url
  			    }
  	  		}
  	  		category {
  	  		  name
  	  		  slug
  	  		}
  	  		description
  		    tag {
    	    name
    	    slug
    	  }
    	  image {
    	    url
    	  }
    	  content {
      		html
    	  }
       }
    }
   `
	const {blogs} = await request<{blogs : IBlog[]}>(graphqlAPI, query)
	return blogs
}