import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetRoomComment, actRoomComment } from '../../../redux/types/actions';

import './comments.css';
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

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            maPhong: data.id,
            maNguoiBinhLuan: user.id,
            ngayBinhLuan: new Date(),
            noiDung: commentText,
            saoBinhLuan: rating
        };

        dispatch(actRoomComment(newComment, navigate))
        setCommentText('');
        setRating(0);
    };
    const renderComments = () => {
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
    };

    return (
        <div className='section__Comments mt-5'>
            <div className=''><h2 className='main__Title'>Comments</h2></div>
            <div className='comments-container mt-5'>
                {renderComments()}
            </div>
            <div>
                {(user) ? (
                    <>
                        <div className='text-right mt-4'><h4 className='main__p'>- Bình luận với tên {user.name} - </h4></div>
                        <div className='container section__Item-secondary p-2'>

                            <form onSubmit={handleCommentSubmit}>
                                {(error) ? (
                                    <div className='alert alert-danger'>{error}</div>) : null}
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
                                <div className="text-right mt-2">
                                    <label>Đánh giá: </label>
                                    <select className='ml-2' value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                                        <option value={0}>Chọn đánh giá</option>
                                        <option value={1}>1 sao</option>
                                        <option value={2}>2 sao</option>
                                        <option value={3}>3 sao</option>
                                        <option value={4}>4 sao</option>
                                        <option value={5}>5 sao</option>
                                    </select>
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
