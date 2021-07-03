import React, {useState} from 'react'
import './Member.css';
import Table from '../table/table.component';
import { DeleteOutline } from "@material-ui/icons"
import { Link } from 'react-router-dom';



  
  const rows_members = [
    { id: 1, member: "Borungu Venceslas", age: 28, avatar:"https://pyxis.nymag.com/v1/imgs/bae/9eb/664ad57e704e648661d28a4590b0b176a4-12-jon-snow.2x.rsquare.w536.jpg" },
    { id: 2, member: "Lannister: Cersei", age: 42 , avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Cersei_Lannister_in_Black_Dress_in_Season_5.jpg/220px-Cersei_Lannister_in_Black_Dress_in_Season_5.jpg"},
    { id: 3, member: "Lannister: Jaime", age: 45 , avatar:"https://i.pinimg.com/originals/d5/5a/71/d55a71bf0be4d02969b342ba742cbce1.png"},
    { id: 4, member: "Stark: Arya", age: 16, avatar:"https://static.wikia.nocookie.net/gameofthrones/images/b/be/AryaShipIronThrone.PNG/revision/latest/top-crop/width/360/height/360?cb=20190520174300" },
    { id: 5, member: "Targaryen: Daenerys", age: null, avatar:"https://pbs.twimg.com/profile_images/1220044684791308288/xGeuSMdZ_400x400.jpg" },
    { id: 6, member: "Melisandre ", age: 150 , avatar:"https://i.pinimg.com/originals/a2/f2/a5/a2f2a513bcfdeefe445e64cdac1838d3.jpg"},
    { id: 7, member: "Clifford: Ferrara", age: 44, avatar:"https://cdn.theorg.com/5530d53c-dd9f-4791-b84b-91f78e4fdc11_small.jpg" }
  ];

function Member() {
    const [memberData, setMemberData] = useState(rows_members);
    const handleDelete =(id) => {
        setMemberData(memberData.filter(item => item.id !== id));
    }

    // columns of our tables members
    const columns_members = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "member", headerName: "Full Name", width: 200,renderCell: (params)=>{
    
            return (
                <div className="member__list">
                    <img className="member__avatar" src={params.row.avatar} alt="" />
                    {params.row.member}
                </div>
            )
        }},
        {
          field: "age",
          headerName: "Age",
          type: "number",
          width: 110,
        },
        {
            field:"action",
            headerName:"Action",
            width: 200,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={`/member/${params.row.id}`}>
                     <button className="editMemberButton btn btn-success rounded btn-sm">Edit</button>
                    </Link>
                    
                    <DeleteOutline className="deleteMember__icon" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];




    return (
        <div className="member">
            <h4 className="member__title">Members</h4>
            <div className="member__container">
                <Table rows={memberData} columns={columns_members}/>
            </div>
        </div>
    )
}

export default Member
