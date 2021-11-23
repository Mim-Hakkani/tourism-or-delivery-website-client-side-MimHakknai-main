import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Sample extends React.Component {
    render() {
	return (
        <div className="py-2 my-5">
          <h1 className="text-center py-3 my-1">Our Beautiful Photos</h1>
            <Gallery className="g-img" photos={PHOTO_SET} />
        </div>
	 
	);
    }
}
const PHOTO_SET = [
  {
    src: 'https://wallpaper.dog/large/17050987.jpg',
    width: 6,
    height: 6
  },
  {
    src: 'https://i.pinimg.com/originals/8a/63/ce/8a63ce4772ec19d16bc0bb2e4ac49cf8.jpg',
    width: 3,
    height: 2
  },
  {
    src: 'https://www.wallpaperuse.com/wallp/53-535809_m.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'http://2.bp.blogspot.com/-kGvI-HrCmUw/UbS0H0HylyI/AAAAAAAAMrM/4tlmw85ZoaU/s1600/1+(17).jpg',
    width: 8,
    height: 2
  },
  {
    src: 'https://thumbs.dreamstime.com/b/adare-mansion-house-ireland-24167291.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'https://www.wallpapertip.com/wmimgs/38-387986_most-beautiful-landscapes-in-the-world-most-beautiful.jpg',
    width: 5,
    height: 4
  },

  {
    src: 'https://static.onecms.io/wp-content/uploads/sites/28/2021/07/16/dubai-DUBAITG0721.jpg',
    width: 4,
    height: 2
  },
  {
    src: 'https://static.toiimg.com/thumb/msid-84200343,width-1070,height-580,resizemode-75,imgsize-11105004,pt-32,y_pad-40/84200343.jpg',
    width: 6,
    height: 2
  },
  {
    src: 'https://www.arabianbusiness.com/public/styles/fb_share_style_image/public/images/2018/02/08/Burj-Khalifas-LED-facade.jpg?itok=bX3jX6XL',
    width: 5,
    height: 3
  }
];
