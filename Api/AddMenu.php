<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "react_restaurant_manegment");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{


    case "POST":
        if(isset($_FILES['MImage']))
        {      
          $Mname = $_POST['Mname'];
          $Mcode = $_POST['Mcode'];
          $Mprice = $_POST['Mprice'];
          $MDate = $_POST['MDate'];
          $MImage = $_POST['MImage'];
          $MImage = time().$_FILES['MImage']['name'];
          $MImage_temp = $_FILES['MImage']['tmp_name'];
          $destination = $_SERVER['DOCUMENT_ROOT'].'/React_resturent_manegment/photos'."/".$MImage;
  
          $result= mysqli_query($db_conn,"INSERT INTO addMenu(Mname, Mcode,Mprice,MDate,MImage)
          VALUES('$Mname','$Mcode', '$Mprice', '$MDate','$MImage')");
  
          if($result)
          { 
            move_uploaded_file($MImage_temp, $destination);
            echo json_encode(["success"=>"Product Inserted Successfully"]);
             return;
          } else{
            echo json_encode(["success"=>"Product Not Inserted!"]);
             return;
          }
  
        } else{
          echo json_encode(["success"=>"Data not in Correct Format"]);
          return;
        }
        break;

     case "GET": 
        $path= explode('/', $_SERVER['REQUEST_URI']);

      if(isset($path[4]) && is_numeric($path[4]))
      {
         echo "Get Api Single Row"; die;
      } else {
       //echo "return all Data"; die;
         $destination= $_SERVER['DOCUMENT_ROOT']."/React_resturent_manegment/photos"."/";
         $allproduct= mysqli_query($db_conn, "SELECT * FROM addMenu");
       if(mysqli_num_rows($allproduct) > 0)
       {
          while($row= mysqli_fetch_array($allproduct))
          {
           $json_array["productdata"][]= array("id"=>$row['mid'], 
           "Mname"=>$row["Mname"],
           "Mcode"=>$row["Mcode"],
           "Mprice"=>$row["Mprice"],
           "MDate"=>$row["MDate"],
           "MImage"=>$row["MImage"]
          );
          }
          echo json_encode($json_array["productdata"]);
          return;
       } else {
        echo json_encode(["result"=>"please check the Data"]);
        return;
       }


    }
         
    break;

  //   case "DELETE":
  //     if (isset($_GET['m_id'])) {
  //         $id = $_GET['m_id'];
  //         $sql = "DELETE FROM student WHEREmid = '$id'";
          
      
          
  //     if ($conn->query($sql) === TRUE) {
  //         $response["success"] = true;
  //         $response["message"] = "Employee deleted successfully.";
  //     } else {
  //         $response["success"] = false;
  //         $response["message"] = "Error deleting employee: " . $conn->error;
  //    }
  
  //      echo json_encode($response);
  // }
  // break;

          
  case "DELETE":
    $path= explode('=', $_SERVER["REQUEST_URI"]);
    print_r($path);
    $result= mysqli_query($db_conn, "DELETE FROM addMenu WHERE mid = '$path[1]' ");
    if($result)
    {
      // echo json_encode(["success"=>"User Record Deleted Successfully"]);
      return;
    } else {
      echo json_encode(["Please Check the User Data!"]);
      return;
    }
  break;        
 }


?>