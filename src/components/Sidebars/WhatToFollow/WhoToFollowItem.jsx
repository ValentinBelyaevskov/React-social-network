import s from './WhoToFollowItem.module.css'
import adaptive from '../SidebarsAdaptive.module.css'

const WhoToFollowItem = ({content, UI, callbacks}) => {
   // console.log('Render: "WhoToFollowItem"')

   return (
      <div className={`${s.whoToFollowItem} who-to-follow__item`}>
         <div className={`who-to-follow__avatar ${s.avatar}`}>
            <img src={content.image} alt="who-to-follow__avatar"></img>
         </div>
         <div className={`who-to-follow__community ${s.community}`}>
            {`${content.community}`}
            <img className={s.check} src={content.check} alt="community avatar"></img>
         </div>
         <div className={`who-to-follow__communityLogin ${s.communityLogin}`}>{content.communityLogin}</div>
         <button
            onClick={() => callbacks.followButtonClickHandler(UI.followButtonText, content.community)}
            className={`who-to-follow__button ${s.button} ${adaptive.button}`}
         >
            {callbacks.getFollowButtonText(UI.followButtonText)}
         </button>
      </div>
   )
}

export default WhoToFollowItem