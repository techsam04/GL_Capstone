package com.capstone.model;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.capstone.model.Product;

public class Helper {


	 public static boolean checkExcelFormat(MultipartFile file) {

	        String contentType = file.getContentType();

	        if (contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
	            return true;
	        } else {
	            return false;
	        }

	    }


	    //convert excel to list of products

	    public static List<Product> convertExcelToListOfProduct(InputStream is) {
	        List<Product> list = new ArrayList<>();

	        try {


	            XSSFWorkbook workbook = new XSSFWorkbook(is);

	            XSSFSheet sheet = workbook.getSheet("Sheet1");

	            int rowNumber = 0;
	            Iterator<Row> iterator = sheet.iterator();

	            while (iterator.hasNext()) {
	                Row row = iterator.next();

	                if (rowNumber == 0) {
	                    rowNumber++;
	                    continue;
	                }

	                Iterator<Cell> cells = row.iterator();

	                int cid = 0;

	                Product product = new Product();

	                while (cells.hasNext()) {
	                    Cell cell = cells.next();
	                    switch (cid) {
	          case 0:
	            product.setPid((int) cell.getNumericCellValue());
	            break;
	          case 1:
	            product.setPname(cell.getStringCellValue());
	            break;
	          case 2:
	        	  product.setPrice((float) cell.getNumericCellValue());
	            break;
	          case 3:
	        	  product.setUrl(cell.getStringCellValue());
	            break;
	          case 4:
	        	  product.setQuantity((int) cell.getNumericCellValue());
	            break;
	          case 5:
	        	  product.setCategory(cell.getStringCellValue());
	            break;
	          default:
	            break;
	          }
	                    cid++;
	        }
	        list.add(product);
	      }
	      workbook.close();
	      return list;
	    } catch (IOException e) {
	      throw new RuntimeException("fail to parse Excel file: " + e.getMessage());
	    }
	  }
	}