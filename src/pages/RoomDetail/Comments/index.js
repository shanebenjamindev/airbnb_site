import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetRoomComment, actRoomComment } from '../../../redux/types/actions';
import { Rate } from 'antd';
import './comments.css';
// import '../../../assets/notificationModel.css'
import { Link, useNavigate } from 'react-router-dom';

export default function Comments(props) {
    const { data, user } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        dispatch(actGetRoomComment(data.id));
    }, [dispatch, data.id]);

    const listComment = useSelector((state) => state.commentReducer.data);
    const error = useSelector((state) => state.commentReducer.error);

    const [rating, setRating] = useState(0);

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            maPhong: data.id,
            maNguoiBinhLuan: user.id,
            ngayBinhLuan: formatDate(new Date()),
            noiDung: commentText.toString(),
            saoBinhLuan: rating
        };

        dispatch(actRoomComment(newComment, navigate))
        setCommentText('');
        setRating(0);
    };
    const renderComments = () => {
        if (listComment?.length !== 0) {
            return listComment?.map((comment) => (
                <div key={comment.id} className='custom__Comment comment-container'>
                    <div className='col-1 avatar'>
                        <img src={comment.avatar ? comment.avatar : `https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif`} alt='Avatar' className='avatar-image img-fluid rounded-circle' />
                    </div>
                    <div className='col-11 comment-details'>
                        <div className='comment-header'>
                            <p className='comment-author main__p'>{comment.tenNguoiBinhLuan}
                                <span className='comment-date'> || {comment.ngayBinhLuan}</span></p>
                        </div>
                        <div className='comment-content'> <p>{comment.noiDung}</p> </div>
                        <div className='comment-rating'>Đánh giá: {comment.saoBinhLuan}</div>
                    </div>
                </div>
            ));
        }
        else {
            return <div className='main__p'>Hiện chưa có comment</div>
        }

    };

    return (
        <div className='py-5'>
            <div className=''><h2 className='main__Title'>Comments</h2></div>
            <div className='comments-container w-75 container'>
                {renderComments()}
            </div>

            <div>
                {(user) ? (
                    <>
                        <div className='text-right mt-4'><h4 className='main__p'>- Bình luận với tên {user.name} - </h4></div>
                        <div className='container section__Item-secondary p-2'>

                            <form onSubmit={handleCommentSubmit}>
                                {(error) ? (<div className='alert alert-danger'>{error}</div>) : null}
                                <div className="">
                                    <textarea
                                        className="form-control"
                                        rows="6"
                                        placeholder="Viết bình luận của bạn..."
                                        required
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                </div>
                                <div className="mt-2 text-right">
                                    <label>Đánh giá: </label>
                                    <Rate value={rating} className='ml-2' onChange={(value) => setRating(value)} />
                                </div>
                                <div className='text-right'>
                                    <button type="submit" className="mt-2 btn__Primary">Bình luận</button>
                                </div>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className='text-right mt-4'>
                        <h4 className='main__p'> - Hãy <Link className='text-warning' to="/login-page">đăng nhập</Link> để bình luận - </h4>
                    </div>
                )}
            </div>
        </div >
    );
}
